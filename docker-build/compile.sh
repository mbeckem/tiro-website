#!/bin/bash
set -e

mkdir -p $(pwd)/build-wasm
docker run --rm -it \
    --name tiro-wasm-build-container \
    --user $(id -u):$(id -g) \
    --volume $(pwd):/workspace/tiro_wasm \
    --volume $(pwd)/build-wasm:/workspace/build \
    tiro-wasm-build
