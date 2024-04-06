cmake_minimum_required(VERSION 3.14)  # for add_link_options and implicit target directories.
project("llama.cpp-throughput" C CXX)

add_executable(llamath main.cpp)