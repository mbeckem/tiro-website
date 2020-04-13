# TiroWASM

This repository contains build scripts and glue code to access Tiro from WebAssembly.

## Dependencies

You will need a recent installation of [Emscripten](https://emscripten.org/).

In addition, you will need a installation of [Boost](https://boost.org) that is not in the system's
default paths.  
Downloading a recent version from the website and extracting it to some local directory is enough.

## Build

The following snippet assumes that Emscripten's build tools are on the PATH.

    $ mkdir build && cd build
    $ emcmake cmake .. -DCMAKE_BUILD_TYPE=Release -DTIRO_WASM_BOOST=PATH_TO_BOOST_FOLDER
    $ emmake make tiro_wasm -j $(nproc)

Output files will be placed into `build/bin`.
