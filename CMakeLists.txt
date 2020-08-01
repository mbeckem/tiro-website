cmake_minimum_required(VERSION 3.13)
cmake_policy(VERSION 3.13)

set(MASTER_PROJECT OFF)
if(CMAKE_CURRENT_SOURCE_DIR STREQUAL CMAKE_SOURCE_DIR)
    set(MASTER_PROJECT ON)
    message(STATUS "tiro_wasm is the master project, CMake version: ${CMAKE_VERSION}")
endif()

project(tiro_wasm VERSION 0.1.0 LANGUAGES CXX)

# These options should only be enabled during development!
option(TIRO_WASM_WARNINGS "Build with pedantic warnings." OFF)
option(TIRO_WASM_WERROR "Enable -Werror (halt compilation on warnings)." OFF)

# Output all targets to well known directories.
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

set(CMAKE_POSITION_INDEPENDENT_CODE ON)
set(CMAKE_CXX_VISIBILITY_PRESET hidden)
set(CMAKE_VISIBILITY_INLINES_HIDDEN 1)
set(CMAKE_CXX_STANDARD 17)

if (EMSCRIPTEN)
    SET(CMAKE_EXECUTABLE_SUFFIX ".js")

    set(EMSCRIPTEN_COMPILE_FLAGS
        "--bind -s DISABLE_EXCEPTION_CATCHING=0 -s STRICT=1"
    )
    set(EMSCRIPTEN_LINK_FLAGS "\
        -s MODULARIZE=1 \
        -s EXPORT_NAME=Tiro \
        -s ALLOW_MEMORY_GROWTH=1 \
        -s DISABLE_EXCEPTION_CATCHING=0 \
        -s STRICT=1 \
        -s STRICT_JS=1 \
        -s ENVIRONMENT=web \
        --closure 1 \
        --no-entry \
        --bind \
    ")
    # add_compile_options(-fno-rtti) cannot use with embind right now

    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${EMSCRIPTEN_COMPILE_FLAGS}")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${EMSCRIPTEN_LINK_FLAGS}")

    add_library(custom_threads INTERFACE)
    add_library(Threads::Threads ALIAS custom_threads)

    set(TIRO_LTO OFF CACHE BOOL "-- Override --" FORCE)
    set(TIRO_WARNINGS ON CACHE BOOL "-- Override --" FORCE)
    set(TIRO_WERROR OFF CACHE BOOL "-- Override --" FORCE)
    set(TIRO_LTO OFF CACHE BOOL "-- Override --" FORCE) # emscripten produces errors (multiple cpp files with the same name?)
    set(TIRO_SKIP_BOOST ON CACHE BOOL "-- Override --" FORCE) 
    set(TIRO_SKIP_THREADS ON CACHE BOOL "-- Override --" FORCE)
endif()
add_subdirectory(tiro EXCLUDE_FROM_ALL)

add_subdirectory(src)
