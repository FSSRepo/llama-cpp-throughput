const constant_questions = [
  "Who is Elon Musk?",
  "Who is Thomas Edison?",
  "What is Nvidia?",
  "What is OpenGL?",
  "What is DirectX?",
  "What is Vulkan?",
  "What is GTA?",
  "How many is 1 + 2?",
  "Tell me the digits of pi",
  "who is Bill Gates?",
  "Give me some advices to use git",
  "How to support to a open source project?",
  "What is GTA?",
  "Who is Satya Nadella?",
  "What is a electric field?",
  "What is a supercomputer?",
  "Lell me how to train a small model in pytorch",
  "What is C++?",
]

function formatTime(seconds) {
  const minutos = Math.floor(seconds / 60);
  const segundos = seconds % 60;
  const tiempoFormateado = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  return tiempoFormateado;
}

const server = [
  {
    endpoint: '/completion',
    endpoint_tokenizer: '/tokenize',
    endpoint_slots: '/props',
    params: (context, question, slot) => {
      let like_chat = $('#chat-behaivor').is(':checked');
      // generate prompt
      let prompt = "";
      if(like_chat) {
        prompt += "A chat between a curious human and an artificial intelligence assistant. " +
        "The assistant gives helpful, detailed, and polite answers to the human's questions.";
        prompt += context.map(chat => '\nUser: '  + chat.user + '\nAssistant:'  + chat.assistant).join('');
        prompt += '\nUser: '  + question + '\nAssistant:';
      } else {
        prompt += 'User: '  + question + '\nAssistant:';
      }
      let npredict = parseInt($("#max-predict").val());
      return {
        prompt,
        temperature: 0.1,
        top_k: 40,
        top_p: 0.9,
        n_predict: npredict,
        ignore_eos: $('#ignore-eos').is(':checked'),
        id_slot: slot,
        cache_prompt: like_chat,
        stop: like_chat ? ['\nUser:'] : [], // when detect this, stop completion
        stream: true
      }
    }
  }
]

class Parallel {
  constructor(requests) {
    this.questions = [];
    this.context = [];
    for(let i = 0; i < requests;i++) {
      this.questions.push(constant_questions[parseInt(Math.random() * constant_questions.length)])
    }
    this.current_question = 0;
    this.continue_ = true;
    this.slot_id = -1;
    this.processed_tokens = 0;
    this.generated_tokens = 0;
  }

  async launch(index) {
    while(this.continue_) {
      await this.process(0, index);
    }
  }

  async setup(server_index, index) {
    try{
      if(this.current_question == 0) {
        this.runtime_start = performance.now();
      }
      this.controller = new AbortController();
      $("#pl-question-" + index).html(this.questions[this.current_question]);
      this.pp_tokens = (await axios.post($("#llama-host").val() + server[server_index].endpoint_tokenizer, {content: this.questions[this.current_question]})).data.tokens.length;
      $("#pl-info-" + index).html("Request: "+ (this.current_question + 1) + "/" + this.questions.length +" in slot " + this.slot_id + "\nProcessing " + this.pp_tokens + " tokens");
      const response = await fetch($("#llama-host").val() + server[server_index].endpoint, {
        method: 'POST',
        body: JSON.stringify(server[server_index].params(this.context, this.questions[this.current_question], this.slot_id)),
        headers: {
          'Connection': 'keep-alive',
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        signal: this.controller.signal
      });
      this.reader = response.body.getReader();
      this.leftover = "";
      this.content = ""; // just predicted before a second
      this.token_count = 1;
      this.processing_start = performance.now();
      this.paralell_index = index;
      this.last_tokens = "";
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.error("llama error: ", e);
        $("#pl-status-" + index).html("Error");
        $("#pl-status-" + index).removeClass("text-success");
        $("#pl-status-" + index).addClass("text-danger");
      }
      throw e;
    }
  }

  stop() {
    if(this.continue_) {
      this.continue_ = false;
      this.finishText(true);
      if(this.controller) {
        this.controller.abort();
      }
    }
  }

  finishText(stop) {
    $("#pl-status-" + this.paralell_index).html(stop ? "Stopped" : "Finished");
    $("#pl-status-" + this.paralell_index).removeClass("text-success");
    $("#pl-status-" + this.paralell_index).addClass(stop ?  "text-danger" : "text-primary");
  }

  updateTextGradient(index, percentage) {
    let color1 = 'black';
    let color2 = 'transparent';
    let gradient = 'linear-gradient(to right, ' + color1 + ' ' + Math.max(percentage * 1.1, 0.0).toFixed(2) + '%, ' + color2 + ')';
    $("#pl-next-token-" + index).css({
        'background': gradient,
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    });
}
  
  async process(server_index, index) {
    if(!this.continue_) {
      return;
    }
    if(!this.reader) {
      await this.setup(server_index, index);
    }

    try {
      const decoder = new TextDecoder();
      const result = await this.reader.read();
      if (result.done) {
        return;
      }

      const text = this.leftover + decoder.decode(result.value);
      const endsWithLineBreak = text.endsWith('\n');
      let lines = text.split('\n');
      if (!endsWithLineBreak) {
        this.leftover = lines.pop();
      } else {
        this.leftover = "";
      }
      const regex = /^(\S+):\s(.*)$/gm;
      for (const line of lines) {
        const match = regex.exec(line);
        if (match) {
          result[match[1]] = match[2]
          if (result.data) {
            result.data = JSON.parse(result.data);
            const current_token_time = performance.now();
            this.slot_id = result.data.id_slot;
            if(this.token_count === 1) {
              this.last_token_time = current_token_time;
              this.tps_last_measure = current_token_time;
              this.processing_time = (current_token_time - this.processing_start) / 1000.0;
            }
            {
              let new_token = result.data.content;
              let percent = (current_token_time - this.tps_last_measure)/1000.0;
              // a second elapsed
              if(percent > 1) {
                $("#pl-next-token-" + index).html(this.last_tokens);
                $("#pl-response-" + index).html(this.content);
                this.tps_last_measure = current_token_time;
                this.content += this.last_tokens;
                this.last_tokens = "";
                this.updateTextGradient(index, 0);
              } else {
                this.updateTextGradient(index, percent * 100);
              }
              this.last_tokens += new_token;
            }
            if (result.data.stop) {
              // real processed tokens
              this.processed_tokens += result.data.timings.prompt_n;
              this.generated_tokens += result.data.tokens_predicted;
              this.context.push({ user: this.questions[this.current_question], assistant: this.content });
              this.continue_ = this.current_question + 1 < this.questions.length;
              this.controller.abort();
              $("#pl-response-" + index).html(this.content);
              $("#pl-next-token-" + index).html(this.last_tokens);
              this.updateTextGradient(index, 100);
              if(this.continue_) {
                this.reader = null;
              } else {
                let time_elapsed = (current_token_time - this.runtime_start) / 1000;
                $("#pl-info-" + index).html("Request: "+ (this.current_question + 1) + "/" + this.questions.length +" slot " + this.slot_id + "\nRuntime: " + formatTime(parseInt(time_elapsed)) + " " +
                "\nPP Total: " + this.processed_tokens + " - TG Total: " +this.generated_tokens);
                this.finishText(false);
              }
              this.token_count = 0;
              this.current_question++;
              return;
            } else {
              let time_elapsed = (current_token_time - this.runtime_start) / 1000;
              let time_token = (current_token_time - this.last_token_time);
              $("#pl-info-" + index).html("Request: "+ (this.current_question + 1) + "/" + this.questions.length +" slot " + this.slot_id + "\nRuntime: " + formatTime(parseInt(time_elapsed)) + " " +
              "\nPP Total: " + this.processed_tokens + " - TG Total: " +this.generated_tokens);
              $("#request-info-" + index).html("TTFT: " + this.processing_time.toFixed(2) + " s - " + (1.0 / (this.processing_time / this.pp_tokens)).toFixed(2) + " TPS\n" +
              (time_token > 1 ? "TG " + this.token_count + " - " + (
                1 / (time_token / 1000.0)
              ).toFixed(2) + " TPS" : ""));
              this.last_token_time = current_token_time;
            }
          }
          this.token_count++;
        }
      }
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.error("llama error: ", e);
        $("#pl-status-" + this.paralell_index).html("Error");
        $("#pl-status-" + this.paralell_index).removeClass("text-success");
        $("#pl-status-" + this.paralell_index).addClass("text-danger");
      }
      throw e;
    }
  }
}

class Main {
  updateProcessInfo(num_paralells, num_requests, p_actives, r_processed, runtime, pp, tg) {
    $("#info-clients").html(`<thead>
    <tr>
      <td>Paralells</td>
      <td>${num_paralells}</td>
      <td>Requests</td>
      <td>${num_requests}</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="property">Actives</td>
      <td>${p_actives}</td>
      <td class="property">Total</td>
      <td>${num_paralells*num_requests}</td>
    </tr>
    <tr>
      <td class="property">Runtime</td>
      <td>${runtime}</td>
      <td class="property">Processed</td>
      <td>${r_processed}</td>
    </tr>
    <tr>
      <td class="property">Total Prompt processing</td>
      <td>${pp}</td>
      <td class="property">Total Token generation</td>
      <td>${tg}</td>
    </tr>
    <tr>
    <td class="property">Max Throughput (first minute)</td>
    <td>${this.max_throughput.toFixed(2)} req/min</td>
    <td class="property">Effective Throughput</td>
    <td>${this.effective_throughput.toFixed(2)} req/min</td>
  </tr>
  </tbody>`);
  }

  async send() {
    if(!$("#num-parallels").val() || !$("#num-requests").val() || $("#btnPlay").hasClass('disabled-btn')) {
      return;
    }
    let n_paralells = Number($("#num-parallels").val())??1;
    let n_requests = Number($("#num-requests").val())??1;
    if(n_paralells <= 0 || n_requests <= 0) {
      alert("Invalid inputs");
      return;
    }
    const server_slots = (await axios.get($("#llama-host").val() + server[0].endpoint_slots)).data.total_slots;
    if(n_paralells > server_slots) {
      alert("The server cannot handle more than " + server_slots + " clients.");
      return;
    }
    $("#btnPlay").addClass('disabled-btn');
    $("#btnStop").removeClass('disabled-btn');
    $("#info-clients").addClass('show-info');
    this.effective_throughput = 0;
    this.max_throughput = 0;
    this.updateProcessInfo(n_paralells, n_requests, n_paralells, 0, "-", 0, 0);
    // start test
    this.parallels = [];
    $("#parallel-list").html("");
    for(let i = 0;i < n_paralells;i ++) {
      let parallel = new Parallel(n_requests);
      this.parallels.push(parallel);
      $("#parallel-list").append(`
      <div class="pll-info">
      <div>
        <div class="info-content">
          <span class="client-info" id="pl-info-${i}"></span>
        </div>
        <h5>Client ${i + 1} - <span class="text-success" id="pl-status-${i}">Running</span></h5>
      </div>
      <span class="client-info" id="request-info-${i}"></span>
      <p class="question-text" id="pl-question-${i}"></p>
        <p class="response-text">
          <span id="pl-response-${i}">
          </span><span id="pl-next-token-${i}"></span>
        </p>
      </div>`);
      parallel.launch(i);
    }
    let start_process = performance.now();
    let inter = setInterval(() => {
      let running = false;
      let actives = 0;
      let tokens_gen = 0;
      let tokens_procs = 0;
      let requests_processed = 0;
      for(let i = 0;i < n_paralells;i ++) {
        if(!running) {
          running = this.parallels[i].continue_;
        }
        if(this.parallels[i].continue_) {
          actives++;
        }
        tokens_procs += this.parallels[i].processed_tokens;
        tokens_gen += this.parallels[i].generated_tokens + this.parallels[i].token_count;
        requests_processed += this.parallels[i].current_question;
      }
      let current = performance.now();
      let elapsed_time_seconds = (current - start_process) / 1000;
      this.effective_throughput = requests_processed / (elapsed_time_seconds / 60.0);
      this.max_throughput = Math.max(this.effective_throughput, this.max_throughput);
      this.updateProcessInfo(n_paralells, n_requests, actives,
        requests_processed, formatTime(parseInt(elapsed_time_seconds)),
        tokens_procs, tokens_gen);
      if(!running) {
        $("#btnPlay").removeClass('disabled-btn');
        $("#btnStop").addClass('disabled-btn');
        clearInterval(inter);
      }
    }, 1000);
  }

  initialize() {
    const ctx = this;
    $("#btnStop").addClass('disabled-btn');
    $("#btnPlay").click(async () => {
      this.send();
    });

    $("#btnStop").click(() => {
      if($("#btnStop").hasClass('disabled-btn')) {
        return;
      }
      for(let i = 0;i < this.parallels.length;i ++) {
        this.parallels[i].stop();
      }
      $("#btnPlay").removeClass('disabled-btn');
      $("#btnStop").addClass('disabled-btn');
    });

    $("#btnReset").click(async () => {
      $("#parallel-list").html("");
      $("#btnPlay").removeClass('disabled-btn');
    });
  }
}

$(document).ready(async () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  let port = 90;
  try {
     port = (await axios.get("/port")).data.port;
  }catch(e) {
  }
  $("#llama-host").val(window.location.protocol + "//" + window.location.hostname+":" + port);
  var main = new Main();
  main.initialize();
});