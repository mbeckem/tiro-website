#!/bin/bash
set -eu;

source ./docker/vars.sh;

cd ./docker/src && docker build \
    -t $TIRO_IMAGE_NAME \
    --build-arg USER_ID=$(id -u) \
    --build-arg GROUP_ID=$(id -g) \
    .;
