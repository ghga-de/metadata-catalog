# Copyright 2021 Universität Tübingen, DKFZ and EMBL
# for the German Human Genome-Phenome Archive (GHGA)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM node:lts-alpine3.15

# install python:
ARG PYTHON_VERSION="3.9"
#RUN export DEBIAN_FRONTEND=noninteractive \
#    && echo "deb http://http.us.debian.org/debian/ stable main contrib" >> \
#        /etc/apt/sources.list \
#    && apt update -y \
#    && apt install -y python${PYTHON_VERSION} python3-pip \
#    && update-alternatives --install /usr/bin/python python /usr/bin/python3.9 10 \
#    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 10

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# setting up env for non-root user:
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# copy app source code:
WORKDIR /service
COPY . /service

RUN apk update && apk upgrade
RUN apk add --no-cache gcc
RUN apk add --update alpine-sdk
# Security patch toss busybox
RUN apk upgrade busybox --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main

# RUN pip install .

# install npm and serve:
RUN npm install && npm install serve

# settung up user and installing dependencies:
RUN chown -R  node:node /service
USER node
RUN python3.9 -m pip install --user -r  /service/configure_build_serve/requirements.txt

# serve web app:
ENTRYPOINT ["/service/configure_build_serve/run.py"]
