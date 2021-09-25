cmake_minimum_required(VERSION 3.13)
cmake_policy(VERSION 3.13)

set(MASTER_PROJECT OFF)
if(CMAKE_CURRENT_SOURCE_DIR STREQUAL CMAKE_SOURCE_DIR)
    set(MASTER_PROJECT ON)
    message(STATUS "tiro_wasm is the master project, CMake version: ${CMAKE_VERSION}")
endif()

project(tiro_wasm VERSION 0.1.0 LANGUAGES CXX)
include(FetchContent)

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

    # See
    # - https://emscripten.org/docs/optimizing/Optimizing-Code.html
    # - https://github.com/emscripten-core/emscripten/blob/main/src/settings.js
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

    # cannot disable rtti currently because of embind
    # add_compile_definitions(EMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0)
    # add_compile_options(-fno-rtti)

    # manually enable lto since emscripten always uses clang.
    # note that thin lto does not work at the moment because emscripten's clang version
    # cannot handle multiple object files with the same basename but different paths
    # https://github.com/emscripten-core/emscripten/issues/12763
    add_compile_options(-flto)
    add_link_options(-flto)

    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${EMSCRIPTEN_COMPILE_FLAGS}")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${EMSCRIPTEN_LINK_FLAGS}")

    add_library(custom_threads INTERFACE)
    add_library(Threads::Threads ALIAS custom_threads)

    set(TIRO_WARNINGS ON CACHE BOOL "-- Override --" FORCE)
    set(TIRO_WERROR OFF CACHE BOOL "-- Override --" FORCE)
    set(TIRO_LTO OFF CACHE BOOL "-- Override --" FORCE)
    set(TIRO_SKIP_THREADS ON CACHE BOOL "-- Override --" FORCE)
    set(TIRO_SKIP_SHARED ON CACHE BOOL "-- Override --" FORCE)
    set(TIRO_SKIP_INSTALL ON CACHE BOOL "-- Override --" FORCE)
endif()

FetchContent_Declare(
    tiro
    GIT_REPOSITORY  https://github.com/mbeckem/tiro.git
    GIT_TAG         6db87853fa64ce1d50cd9685919ce1dfbfd4f53a
    GIT_PROGRESS    TRUE
    GIT_SHALLOW     TRUE
)

FetchContent_GetProperties(tiro)
if(NOT tiro_POPULATED)
    message(STATUS "# Fetching tiro dependency")
    FetchContent_Populate(tiro)
    add_subdirectory(${tiro_SOURCE_DIR} ${tiro_BINARY_DIR} EXCLUDE_FROM_ALL)
endif()

add_subdirectory(src)
