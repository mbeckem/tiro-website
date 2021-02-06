FROM ubuntu:latest

# User for file manipulation. Should be the same as the user / group id on the host.
ARG USER_ID
ARG GROUP_ID

ARG TZ=UTC
ARG DEBIAN_FRONTEND=noninteractive
ARG EMSCRIPTEN_VERSION=latest

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
	git \
	curl \
	build-essential \
	g++ gdb ninja-build cmake \
	python3 python3-pip python3-venv \
	default-jre \
	&& apt-get autoremove -y \
	&& apt-get clean -y

RUN pip3 install --upgrade wheel setuptools

# Make sure 'user' exists in the container. This user maps to the user on the host machine.
RUN addgroup --gid $GROUP_ID user \
	&& adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user \
	&& mkdir /workspace \
	&& chown -R user:user /workspace
USER user

RUN cd /workspace \
	&& git clone https://github.com/emscripten-core/emsdk.git \
	&& cd emsdk \
	&& ./emsdk install $EMSCRIPTEN_VERSION \
	&& ./emsdk activate $EMSCRIPTEN_VERSION \
	&& echo "source /workspace/emsdk/emsdk_env.sh" >> ~/.bashrc


COPY ./docker-build/src/build.sh /workspace/build.sh

# tiro_wasm source project expected in /workspace/tiro_wasm
# output directory expected in /workspace/build
CMD "/workspace/build.sh"
