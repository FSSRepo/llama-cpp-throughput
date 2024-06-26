#include <iostream>
#ifndef _WIN32
#include <unistd.h>
#endif
#include <signal.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <cstring>
#include <string.h>
#include <string>
#include "httplib.h"

using namespace httplib;

void signalHandler(int signum) {
    if (signum == SIGTERM) {
        exit(0);
    }
}

int main(int argc, char *argv[]) {
#ifndef _WIN32
    if (argc == 2 && std::strcmp(argv[1], "-s") == 0) {
        pid_t pid;
        FILE *pidFile = fopen("llamathd.pid", "r");
        if (pidFile == nullptr || fscanf(pidFile, "%d", &pid) != 1) {
            std::cerr << "Failed to read daemon PID." << std::endl;
            return 1;
        }
        fclose(pidFile);
        if (kill(pid, SIGTERM) == 0) {
            std::cout << "Daemon terminated successfully." << std::endl;
        } else {
            std::cerr << "Failed to terminate daemon." << std::endl;
            return 1;
        }
        return 0;
    }

    int shared_port = -1;

    if (argc == 3 && std::strcmp(argv[1], "-p") == 0) {
        shared_port = std::stoi(argv[2]);
    }

    pid_t pid = fork();

    if (pid < 0) {
        std::cerr << "Failed to fork." << std::endl;
        return 1;
    }

    if (pid > 0) {
        return 0;
    }

    signal(SIGTERM, signalHandler);

    if (setsid() < 0) {
        std::cerr << "Failed to create new SID." << std::endl;
        return 1;
    }

    // Cerrar los descriptores de archivo estándar
    close(STDIN_FILENO);
    close(STDOUT_FILENO);
    close(STDERR_FILENO);

    FILE *pidFile = fopen("llamathd.pid", "w");
    if (pidFile == nullptr) {
        std::cerr << "Failed to create PID file." << std::endl;
        return 1;
    }
    fprintf(pidFile, "%d\n", getpid());
    fclose(pidFile);
    
#else
    printf("server listening at: http://127.0.0.1:8082");
    int shared_port = 9999;
#endif

    // daemon code
    {
        Server svr;
        svr.Options(R"(.*)", [](const httplib::Request & req, httplib::Response & res) {
            res.set_header("Access-Control-Allow-Origin",      req.get_header_value("Origin"));
            res.set_header("Access-Control-Allow-Credentials", "true");
            res.set_header("Access-Control-Allow-Methods",     "POST");
            res.set_header("Access-Control-Allow-Headers",     "*");
            return res.set_content("", "application/json; charset=utf-8");
        });

        svr.Get("/port", [&](const httplib::Request &, httplib::Response & res) {
            std::string resp = "{\"port\": " + std::to_string(shared_port) + "}";
            res.set_content(resp.c_str(), "application/json");
            res.status = 200; // HTTP OK
        });

        svr.set_base_dir("../public");
        if (!svr.bind_to_port("0.0.0.0", 8082)) {
            return 1;
        }

        svr.listen_after_bind();
    }

    return 0;
}
