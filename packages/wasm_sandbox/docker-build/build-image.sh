#!/bin/bash
set -e

docker build \
    -t tiro-wasm-build \
    --build-arg USER_ID=$(id -u) \
    --build-arg GROUP_ID=$(id -g) \
    -f $(pwd)/docker-build/src/Dockerfile .
