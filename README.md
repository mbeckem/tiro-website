# TiroWASM

This repository contains build scripts and glue code to access Tiro from WebAssembly.

## Dependencies

You will need a recent installation of [Emscripten](https://emscripten.org/).

In addition, you will need a installation of [Boost](https://boost.org) that is not in the system's
default paths.  
Downloading a recent version from the website and extracting it to some local directory is enough.

## Project setup

Don't forget to checkout submodules:

    $ git submodule update --init --recursive

## Build

The following snippet assumes that Emscripten's build tools are on the PATH.

    $ mkdir build && cd build
    $ emcmake cmake .. -DCMAKE_BUILD_TYPE=Release
    $ emmake make tiro_wasm -j $(nproc)

Output files will be placed into `build/bin`.

## Alternative: use docker image to build the WebAssembly output:

From the project root directory, execute:

    $ ./docker-build/build-image.sh             # Creates image called tiro-wasm-build
    $ ./docker-build/compile.sh                 # Outputs build into the build-wasm folder

The directory `./build-wasm/bin` will contain the compiled javascript and webassembly files.
