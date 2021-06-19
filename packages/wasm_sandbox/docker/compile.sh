#!/bin/bash
set -eu;

source ./docker/vars.sh;

docker start -ai $TIRO_CONTAINER_NAME;
