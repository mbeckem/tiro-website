#!/bin/bash
set -eu;

source ./docker/vars.sh;

mkdir -p $TIRO_BUILD_DIR;
docker container rm -f $TIRO_CONTAINER_NAME > /dev/null 2>&1;
docker create -it \
    --name $TIRO_CONTAINER_NAME \
    --user $(id -u):$(id -g) \
    --volume $TIRO_PROJECT_DIR:/workspace/tiro_wasm \
    --volume $TIRO_BUILD_DIR:/workspace/build \
    $TIRO_IMAGE_NAME:latest;
