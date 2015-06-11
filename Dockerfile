# docker version 1.6.2

FROM ubuntu:14.04

# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core


