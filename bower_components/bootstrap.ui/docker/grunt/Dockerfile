FROM            debian:latest

RUN             apt-get update && apt-get install -y git git-core curl bzip2
RUN             curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN             apt-get install nodejs
RUN             npm install --global grunt-cli
RUN             npm install --global bower
RUN             mkdir /workspace
RUN             useradd -s /bin/bash docker-container-user
RUN             mkdir /home/docker-container-user

COPY            ./init-container.sh /root/init-container.sh
WORKDIR         /workspace
