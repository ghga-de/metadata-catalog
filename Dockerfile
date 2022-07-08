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

FROM node:16.6.0-buster

# install python:
ARG PYTHON_VERSION="3.9"
RUN export DEBIAN_FRONTEND=noninteractive \
    && echo "deb http://http.us.debian.org/debian/ stable main contrib" >> \
        /etc/apt/sources.list \
    && apt update -y \
    && apt install -y python${PYTHON_VERSION} python3-pip \
    && update-alternatives --install /usr/bin/python python /usr/bin/python3.9 10 \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 10

# copy app source code:
COPY . /service
WORKDIR /service

# # create new user and execute as that user
# RUN useradd --create-home appuser && chown -R appuser:appuser /service
# WORKDIR /home/appuser
# USER appuser

# install dependencies
RUN yarn install && npm install serve \
     && python3.9 -m pip install -r /service/configure_build_serve/requirements.txt

# serve web app:
ENTRYPOINT ["/service/configure_build_serve/run.py"]
