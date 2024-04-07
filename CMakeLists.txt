cmake_minimum_required(VERSION 3.14)  # for add_link_options and implicit target directories.
project("llama.cpp-throughput" C CXX)

set(THREADS_PREFER_PTHREAD_FLAG ON)
find_package(Threads REQUIRED)

add_executable(llamath main.cpp)

target_link_libraries(llamath Threads::Threads)