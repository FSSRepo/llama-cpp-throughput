const constant_questions = [
  "Who is Elon Musk?",
  "Who is Thomas Edison?",
  "What is Nvidia?",
  "What is OpenGL?",
  "What is DirectX?",
  "What is Vulkan?",
  "Who is Peter Higgs?",
  "How many is 1 + 2?",
  "Tell me the digits of pi",
  "who is Bill Gates?",
  "Give me some advices to use git",
  "How to support to a open source project?",
  "What is Unreal Engine?",
  "Who is Satya Nadella?",
  "What is a electric field?",
  "What is a supercomputer?",
  "Lell me how to train a small model in pytorch",
  "What is C++?",
]

const constant_documents = [
  `LibGDX Book

  Author: Suryakumar Balakrishna

  Suryakumar Balakrishnan Nair is an engineering graduate from Cochin
  University of Science and Technology, Cochin, India with a specialization in
  computer science. He just loves programming and likes to keep on experimenting.
  He has designed a dozen games on the Android platform using LibGDX.
  He loves traveling and visiting various places. He reads articles and books on a
  range of issues from politics to environment. He is currently working as a full-time
  Android game developer for an Indian game company, Csharks (http://csharks.
  com/site/).
  I would like to thank my colleagues in Csharks for providing me with
  moral support, especially Vipin TP and Dheeraj S. I would also like to
  thank my dear friend Rahul Satish who helped me with the Blender
  models. Most importantly, I want to thank my mentor, Juwal Bose,
  who guided me and motivated me for this project.
  Andreas Oehlke is a professional software engineer and computer scientist
  who feels very much at home on any Linux/UNIX machine. He holds a bachelor's
  degree in Computer Science and loves to assemble and disassemble software and
  hardware alike. The exorbitant affinity for electronics and computers has always
  been his trademark. His hobbies include game and web development, programming
  in general (software design and new languages), programming embedded systems
  with microcontrollers, playing sports, and making music.
  He currently works full time as a software engineer for a German financial
  institution. Furthermore, he has worked as a consultant and game developer in San
  Francisco, CA. In his spare time, he provides his expertise to a German start-up
  called Gamerald (http://www.gamerald.com/).
  I want to thank my parents, Michael and Sigrid, and my brother
  Dennis for their constant and invaluable support, which definitely
  kept me on the go while writing this book. I also want to thank my
  close friends for giving me lots of helpful feedback, notably Sascha
  Björn Bolz for providing the artwork for Canyon Bunny. Last but
  not least, I want to thank Klaus "keith303" Spang for providing
  the music track, the whole team of Packt Publishing, and all the
  numerous reviewers for their great work who helped me produce
  a high-quality book.
  About the Reviewers
  Juwal Bose is a game developer, game designer, and technology consultant from
  the incredibly beautiful state of Kerala in India. He is an active figure in social
  media and game development SIGs and never misses a chance to speak at technical
  conferences and BarCamps. He conducts technical workshops for engineering
  students at professional colleges as part of open source initiatives. Juwal is the
  Director at Csharks Games and Solutions Pvt. Ltd., where he manages research and
  development as well as training and pipeline integration in his area of expertise.
  He has been developing games since 2004 using multiple technologies, including
  ActionScript, Objective-C, Java, Unity, LibGDX, Cocos2D, OpenFL, Unity, and Starling.
  His team has created more than 400 games to date, and many of the job management
  games are listed at the top of leading portals worldwide. He has been part of the
  development of more than 20 LibGDX games primarily for the Android platform.
  Juwal writes game development tutorials for GameDevTuts+ and manages the blog
  of Csharks' games. His isometric tutorial for GameDevTuts+ was well received and
  is considered a thorough guide to developing tile-based isometric games. Juwal has
  written LibGDX Game Development Essentials, Packt Publishing, and reviewed a couple
  of books as well. The first book he had written, Starling Game Development Essentials,
  Packt Publishing, is based on another exceptional cross-platform game development
  framework called Starling.
  Juwal is a voracious reader and likes to travel. His future plans also include
  writing fiction.
  Yunkun Huang is a senior software engineer with more than 7 years of experience
  in Java development. His research interests include game development, swarm
  intelligence, automated trading, and enterprise application development.
  He works for ThoughtWorks as a Java developer now. For more information
  about his background and research, you can visit his home page
  http://www.huangyunkun.com/.
  Stéphane Meylemans has a bachelor's degree in information technology.
  He worked in web development for 8 years and then decided to move on to game
  development (mobile and desktop). He has learned Unreal Engine and Unity Game
  development and is currently working on a LibGDX-based point n click adventure
  game for which he is writing the story.
  I would like to thank the author for this great book. It's very useful
  and well written. It helped me a lot to develop in LibGDX and I
  recommend it to anyone with Java knowledge who wants to start
  developing in LibGDX.
  Chris Moeller is a founder of the game studio Ackmi Design and Engineering.
  He has been building computers since the age of 9 and has been programming for
  more than 10 years. He has had the opportunity to work for software companies as
  a PHP developer, Java QA engineer, and a Flash developer, and he currently works
  primarily in Java on LibGDX-based applications.
  He has been an enthusiastic gamer for most of his life and loves many of John
  Carmack's and early Blizzard games. From these inspirations, he has created
  many games and game prototypes in several different programming languages.
  He writes game programming tutorials on his blog at http://chris-moeller.
  blogspot.in/, and most of his new games can be found on his company website
  at http://ackmi.com/, which he runs with his wife, Megan.
  www.PacktPub.com
  Support files, eBooks, discount offers, and more
  For support files and downloads related to your book, please visit
  www.PacktPub.com.
  Did you know that Packt offers eBook versions of every book published, with PDF
  and ePub files available? You can upgrade to the eBook version at www.PacktPub.
  com and as a print book customer, you are entitled to a discount on the eBook copy.
  Get in touch with us at service@packtpub.com for more details.
  At www.PacktPub.com, you can also read a collection of free technical articles, sign
  up for a range of free newsletters and receive exclusive discounts and offers on
  Packt books and eBooks.
  TM
  https://www2.packtpub.com/books/subscription/packtlib
  Do you need instant solutions to your IT questions? PacktLib is Packt's online digital
  book library. Here, you can search, access, and read Packt's entire library of books.
  Why subscribe?
  • Fully searchable across every book published by Packt
  • Copy and paste, print, and bookmark content
  • On demand and accessible via a web browser
  Free access for Packt account holders
  If you have an account with Packt at www.PacktPub.com, you can use this to access
  PacktLib today and view 9 entirely free books. Simply use your login credentials for
  immediate access.`,
  `CUDA Programming Book
  
  Chapter 1. The Benefits of Using GPUs
  The Graphics Processing Unit (GPU)1 provides much higher instruction throughput and memory bandwidth than the CPU within a similar price and power envelope. Many applications leverage these higher
  capabilities to run faster on the GPU than on the CPU (see GPU Applications). Other computing devices, like FPGAs, are also very energy efficient, but offer much less programming flexibility than GPUs.
  This difference in capabilities between the GPU and the CPU exists because they are designed with
  different goals in mind. While the CPU is designed to excel at executing a sequence of operations,
  called a thread, as fast as possible and can execute a few tens of these threads in parallel, the GPU
  is designed to excel at executing thousands of them in parallel (amortizing the slower single-thread
  performance to achieve greater throughput).
  The GPU is specialized for highly parallel computations and therefore designed such that more transistors are devoted to data processing rather than data caching and flow control. The schematic Figure
  1 shows an example distribution of chip resources for a CPU versus a GPU.
  Figure 1: The GPU Devotes More Transistors to Data Processing
  Devoting more transistors to data processing, for example, floating-point computations, is beneficial
  for highly parallel computations; the GPU can hide memory access latencies with computation, instead
  1 The graphics qualifier comes from the fact that when the GPU was originally created, two decades ago, it was designed as
  a specialized processor to accelerate graphics rendering. Driven by the insatiable market demand for real-time, high-definition,
  3D graphics, it has evolved into a general processor used for many more workloads than just graphics rendering.
  3
  CUDA C++ Programming Guide, Release 12.3
  of relying on large data caches and complex flow control to avoid long memory access latencies, both
  of which are expensive in terms of transistors.
  In general, an application has a mix of parallel parts and sequential parts, so systems are designed with
  a mix of GPUs and CPUs in order to maximize overall performance. Applications with a high degree of
  parallelism can exploit this massively parallel nature of the GPU to achieve higher performance than
  on the CPU.
  4 Chapter 1. The Benefits of Using GPUs
  Chapter 2. CUDA®: A General-Purpose
  Parallel Computing Platform
  and Programming Model
  In November 2006, NVIDIA®
  introduced CUDA®
  , a general purpose parallel computing platform and
  programming model that leverages the parallel compute engine in NVIDIA GPUs to solve many complex
  computational problems in a more efficient way than on a CPU.
  CUDA comes with a software environment that allows developers to use C++ as a high-level programming language. As illustrated by Figure 2, other languages, application programming interfaces, or
  directives-based approaches are supported, such as FORTRAN, DirectCompute, OpenACC.
  5
  CUDA C++ Programming Guide, Release 12.3
  Figure 2: GPU Computing Applications. CUDA is designed to support various languages and application
  programming interfaces.
  6 Chapter 2. CUDA®: A General-Purpose Parallel Computing Platform and Programming Model
  Chapter 3. A Scalable Programming
  Model
  The advent of multicore CPUs and manycore GPUs means that mainstream processor chips are now
  parallel systems. The challenge is to develop application software that transparently scales its parallelism to leverage the increasing number of processor cores, much as 3D graphics applications transparently scale their parallelism to manycore GPUs with widely varying numbers of cores.
  The CUDA parallel programming model is designed to overcome this challenge while maintaining a low
  learning curve for programmers familiar with standard programming languages such as C.
  At its core are three key abstractions — a hierarchy of thread groups, shared memories, and barrier
  synchronization — that are simply exposed to the programmer as a minimal set of language extensions.
  These abstractions provide fine-grained data parallelism and thread parallelism, nested within coarsegrained data parallelism and task parallelism. They guide the programmer to partition the problem
  into coarse sub-problems that can be solved independently in parallel by blocks of threads, and each
  sub-problem into finer pieces that can be solved cooperatively in parallel by all threads within the block.
  This decomposition preserves language expressivity by allowing threads to cooperate when solving
  each sub-problem, and at the same time enables automatic scalability. Indeed, each block of threads
  can be scheduled on any of the available multiprocessors within a GPU, in any order, concurrently or
  sequentially, so that a compiled CUDA program can execute on any number of multiprocessors as
  illustrated by Figure 3, and only the runtime system needs to know the physical multiprocessor count.
  This scalable programming model allows the GPU architecture to span a wide market range by simply
  scaling the number of multiprocessors and memory partitions: from the high-performance enthusiast
  GeForce GPUs and professional Quadro and Tesla computing products to a variety of inexpensive,
  mainstream GeForce GPUs (see CUDA-Enabled GPUs for a list of all CUDA-enabled GPUs).
  7
  CUDA C++ Programming Guide, Release 12.3
  Figure 3: Automatic Scalability
  Note: A GPU is built around an array of Streaming Multiprocessors (SMs) (see Hardware Implementation for
  more details). A multithreaded program is partitioned into blocks of threads that execute independently from
  each other, so that a GPU with more multiprocessors will automatically execute the program in less time than a
  GPU with fewer multiprocessors.
  8 Chapter 3. A Scalable Programming Model
  Chapter 4. Document Structure
  This document is organized into the following sections:
  ▶ Introduction is a general introduction to CUDA.
  ▶ Programming Model outlines the CUDA programming model.
  ▶ Programming Interface describes the programming interface.
  ▶ Hardware Implementation describes the hardware implementation.
  ▶ Performance Guidelines gives some guidance on how to achieve maximum performance.
  ▶ CUDA-Enabled GPUs lists all CUDA-enabled devices.
  ▶ C++ Language Extensions is a detailed description of all extensions to the C++ language.
  ▶ Cooperative Groups describes synchronization primitives for various groups of CUDA threads.
  ▶ CUDA Dynamic Parallelism describes how to launch and synchronize one kernel from another.
  ▶ Virtual Memory Management describes how to manage the unified virtual address space.
  ▶ Stream Ordered Memory Allocator describes how applications can order memory allocation and
  deallocation.
  ▶ Graph Memory Nodes describes how graphs can create and own memory allocations.
  ▶ Mathematical Functions lists the mathematical functions supported in CUDA.
  ▶ C++ Language Support lists the C++ features supported in device code.
  ▶ Texture Fetching gives more details on texture fetching.
  ▶ Compute Capabilities gives the technical specifications of various devices, as well as more architectural details.
  ▶ Driver API introduces the low-level driver API.
  ▶ CUDA Environment Variables lists all the CUDA environment variables.
  ▶ Unified Memory Programming introduces the Unified Memory programming model.
  9
  CUDA C++ Programming Guide, Release 12.3
  10 Chapter 4. Document Structure
  Chapter 5. Programming Model
  This chapter introduces the main concepts behind the CUDA programming model by outlining how
  they are exposed in C++.
  An extensive description of CUDA C++ is given in Programming Interface.
  Full code for the vector addition example used in this chapter and the next can be found in the vectorAdd CUDA sample.
  5.1. Kernels
  CUDA C++ extends C++ by allowing the programmer to define C++ functions, called kernels, that, when
  called, are executed N times in parallel by N different CUDA threads, as opposed to only once like regular
  C++ functions.
  A kernel is defined using the __global__ declaration specifier and the number of CUDA threads that
  execute that kernel for a given kernel call is specified using a new <<<...>>>execution configuration
  syntax (see C++ Language Extensions). Each thread that executes the kernel is given a unique thread
  ID that is accessible within the kernel through built-in variables.
  As an illustration, the following sample code, using the built-in variable threadIdx, adds two vectors
  A and B of size N and stores the result into vector C:
   Kernel definition
  __global__ void VecAdd(float* A, float* B, float* C)
  {
  int i = threadIdx.x;
  C[i] = A[i] + B[i];
  }
  int main()
  {
  ...
  Kernel invocation with N threads
  VecAdd<<<1, N>>>(A, B, C);
  ...
  }
  Here, each of the N threads that execute VecAdd() performs one pair-wise addition.
  11
  CUDA C++ Programming Guide, Release 12.3
  5.2. Thread Hierarchy
  For convenience, threadIdx is a 3-component vector, so that threads can be identified using a onedimensional, two-dimensional, or three-dimensional thread index, forming a one-dimensional, twodimensional, or three-dimensional block of threads, called a thread block. This provides a natural way
  to invoke computation across the elements in a domain such as a vector, matrix, or volume.
  The index of a thread and its thread ID relate to each other in a straightforward way: For a onedimensional block, they are the same; for a two-dimensional block of size (Dx, Dy), the thread ID of
  a thread of index (x, y) is (x + y Dx); for a three-dimensional block of size (Dx, Dy, Dz), the thread ID of a
  thread of index (x, y, z) is (x + y Dx + z Dx Dy).
  As an example, the following code adds two matrices A and B of size NxN and stores the result into
  matrix C:
   Kernel definition
  __global__ void MatAdd(float A[N][N], float B[N][N],
  float C[N][N])
  {
  int i = threadIdx.x;
  int j = threadIdx.y;
  C[i][j] = A[i][j] + B[i][j];
  }
  int main()
  {
  ...
   Kernel invocation with one block of N * N * 1 threads
  int numBlocks = 1;
  dim3 threadsPerBlock(N, N);
  MatAdd<<<numBlocks, threadsPerBlock>>>(A, B, C);
  ...
  }
  There is a limit to the number of threads per block, since all threads of a block are expected to reside
  on the same streaming multiprocessor core and must share the limited memory resources of that
  core. On current GPUs, a thread block may contain up to 1024 threads.
  However, a kernel can be executed by multiple equally-shaped thread blocks, so that the total number
  of threads is equal to the number of threads per block times the number of blocks.
  Blocks are organized into a one-dimensional, two-dimensional, or three-dimensional grid of thread
  blocks as illustrated by Figure 4. The number of thread blocks in a grid is usually dictated by the size
  of the data being processed, which typically exceeds the number of processors in the system.
  The number of threads per block and the number of blocks per grid specified in the <<<...>>> syntax
  can be of type int or dim3. Two-dimensional blocks or grids can be specified as in the example above.
  Each block within the grid can be identified by a one-dimensional, two-dimensional, or threedimensional unique index accessible within the kernel through the built-in blockIdx variable. The
  dimension of the thread block is accessible within the kernel through the built-in blockDim variable.
  Extending the previous MatAdd() example to handle multiple blocks, the code becomes as follows.
   Kernel definition
  __global__ void MatAdd(float A[N][N], float B[N][N],
  float C[N][N])
  (continues on next page)
  12 Chapter 5. Programming Model
  CUDA C++ Programming Guide, Release 12.3
  Figure 4: Grid of Thread Blocks
  (continued from previous page)
  {
  int i = blockIdx.x * blockDim.x + threadIdx.x;
  int j = blockIdx.y * blockDim.y + threadIdx.y;
  if (i < N && j < N)
  C[i][j] = A[i][j] + B[i][j];
  }
  int main()
  {
  ...
Kernel invocation
  dim3 threadsPerBlock(16, 16);
  dim3 numBlocks(N  threadsPerBlock.x, N  threadsPerBlock.y);
  MatAdd<<<numBlocks, threadsPerBlock>>>(A, B, C);
  ...
  }
  A thread block size of 16x16 (256 threads), although arbitrary in this case, is a common choice. The
  grid is created with enough blocks to have one thread per matrix element as before. For simplicity,
  this example assumes that the number of threads per grid in each dimension is evenly divisible by the
  number of threads per block in that dimension, although that need not be the case.
  Thread blocks are required to execute independently: It must be possible to execute them in any order,
  in parallel or in series. This independence requirement allows thread blocks to be scheduled in any order
  across any number of cores as illustrated by Figure 3, enabling programmers to write code that scales
  with the number of cores.
  Threads within a block can cooperate by sharing data through some shared memory and by synchronizing their execution to coordinate memory accesses. More precisely, one can specify synchronization
  points in the kernel by calling the __syncthreads() intrinsic function; __syncthreads() acts as a
  barrier at which all threads in the block must wait before any is allowed to proceed. Shared Memory
  gives an example of using shared memory. In addition to __syncthreads(), the Cooperative Groups
  API provides a rich set of thread-synchronization primitives.
  For efficient cooperation, the shared memory is expected to be a low-latency memory near each processor core (much like an L1 cache) and __syncthreads() is expected to be lightweight.`
]

const document_questions = [
  ["Who is the author of the book?", "What is the book about?"],
  ["What is the book about?", "What release is this book?"]
]

const expected_answers = [
  ["Suryakumar Balakrishnan", "About a game engine, libgdx"],
  ["About CUDA programming", "Release 12.3"]
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
    let has_document = false;
    for(let i = 0; i < requests;i++) {
      let doc = Math.random() * 100;
      if(has_document || doc < 40 || doc > 60) {
        this.questions.push({ document: false, content: constant_questions[parseInt(Math.random() * constant_questions.length)] })
      } else {
        let doc_idx = Math.min(parseInt(Math.random() * constant_documents.length*2), constant_documents.length - 1);
        let question_idx = Math.min(parseInt(Math.random() * document_questions[doc_idx].length*2), document_questions[doc_idx].length - 1);
        let process_doc = constant_documents[doc_idx] + "\nUser: " + document_questions[doc_idx][question_idx];
        this.questions.push({ document: true, content: process_doc, doc_idx, question_idx });
        console.log(process_doc);
        has_document = true;
      }
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
      let quest = this.questions[this.current_question];
      if(!quest.document) {
        $("#pl-question-" + index).html(quest.content);
      } else {
        $("#pl-question-" + index).html(document_questions[quest.doc_idx][quest.question_idx] + `\n<span style="font-weight: 400; font-size: 16px;">Expected Response: ${expected_answers[quest.doc_idx][quest.question_idx]}</span>`);
      }
      this.pp_tokens = (await axios.post($("#llama-host").val() + server[server_index].endpoint_tokenizer, {content: this.questions[this.current_question].content })).data.tokens.length;
      $("#pl-info-" + index).html("Request: "+ (this.current_question + 1) + "/" + this.questions.length +" in slot " + this.slot_id + "\nProcessing " + this.pp_tokens + " tokens ("+(this.questions[this.current_question].document ? "Document": "Question")+")");
      const response = await fetch($("#llama-host").val() + server[server_index].endpoint, {
        method: 'POST',
        body: JSON.stringify(server[server_index].params(this.context, this.questions[this.current_question].content, this.slot_id)),
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
      this.tokens_second = 0;
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
      const current_token_time = performance.now()
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
                $("#request-info-" + index).html("TTFT: " + this.processing_time.toFixed(2) + " s - " + (1.0 / (this.processing_time / this.pp_tokens)).toFixed(2) + " TPS\n" +
                "TG " + this.token_count + " - " + this.tokens_second + " TPS");
                this.tokens_second = 0;
              } else {
                this.updateTextGradient(index, percent * 100);
              }
              this.last_tokens += new_token;
              this.tokens_second++;
            }
            if (result.data.stop) {
              // real processed tokens
              this.processed_tokens += result.data.timings.prompt_n;
              this.generated_tokens += result.data.tokens_predicted;
              this.context.push({ user: this.questions[this.current_question], assistant: this.content });
              this.continue_ = this.current_question + 1 < this.questions.length;
              this.tokens_second = 0;
              this.controller.abort();
              $("#pl-response-" + index).html(this.content);
              $("#pl-next-token-" + index).html(this.last_tokens);
              this.updateTextGradient(index, 100);
              $("#request-info-" + index).html("TTFT: " + this.processing_time.toFixed(2) + " s - " + (1.0 / (this.processing_time / this.pp_tokens)).toFixed(2) + " TPS\n" +
              "TG " + result.data.tokens_predicted + " - " + result.data.timings.predicted_per_second.toFixed(2) + " TPS");
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
              let time_elapsed = (current_token_time - this.runtime_start) / 1000.0;
              $("#pl-info-" + index).html("Request: "+ (this.current_question + 1) + "/" + this.questions.length +" slot " + this.slot_id + "\nRuntime: " + formatTime(parseInt(time_elapsed)) + " " +
              "\nPP Total: " + this.processed_tokens + " - TG Total: " +(this.generated_tokens + this.token_count));
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