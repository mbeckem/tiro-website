# wasm_sandbox

This repository contains build scripts and glue code to access Tiro from WebAssembly.

## Use docker image to build the WebAssembly output:

To build everything, simply run `yarn build` from this directory.
Note that the build process relies heavily on docker.

### Details

During the docker based build, the following steps will be taken:

- Recreate the build image if it does not exist
- Recreate the build container if it does not exist
- Compile the project using emscripten from inside the build container

The names of the build image and container are defined in `./docker/vars.sh`.

To force recreation of the image or container, simply remove them using `docker image rm` or `docker container rm`.
You can also use the commands `yarn build-image`, `yarn create-container` or `yarn compile` to explicitly trigger single steps.

Reusing the same container is recommended because cached build artifacts from emscripten can be reused.

## Manual development without docker

### Dependencies

You will need a recent installation of [Emscripten](https://emscripten.org/).
See also the files in `.devcontainer/`.

### Manual Build

The following snippet assumes that Emscripten's build tools are on the PATH.

    $ mkdir build && cd build
    $ emcmake cmake .. -DCMAKE_BUILD_TYPE=Release
    $ emmake make tiro_wasm -j $(nproc)

Output files will be placed into `build/bin`.
