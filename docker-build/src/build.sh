#!/bin/bash
set -e

source /workspace/emsdk/emsdk_env.sh > /dev/null
cd /workspace/build
emcmake cmake /workspace/tiro_wasm -DCMAKE_BUILD_TYPE=Release -DTIRO_WASM_BOOST=/workspace/boost_1_72_0/
emmake make tiro_wasm -j $(nproc)
