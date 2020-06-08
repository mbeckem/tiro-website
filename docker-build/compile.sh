#!/bin/bash
set -e

mkdir -p $(pwd)/build-wasm
docker run --rm -it \
    --user $(id -u):$(id -g) \
    --volume $(pwd):/workspace/tiro_wasm \
    --volume $(pwd)/build-wasm:/workspace/build \
    tiro-wasm-build
