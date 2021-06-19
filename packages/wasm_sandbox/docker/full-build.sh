#!/bin/bash
set -eu;

source ./docker/vars.sh;

if ! docker image inspect $TIRO_IMAGE_NAME > /dev/null 2>&1; then
    echo "Recreating tiro build image";
    ./docker/build-image.sh;
fi

if ! docker container inspect $TIRO_CONTAINER_NAME > /dev/null 2>&1; then
    echo "Recreating tiro build container";
    ./docker/create-container.sh;
fi

./docker/compile.sh
