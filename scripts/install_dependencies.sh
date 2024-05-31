#!/bin/bash

apt-get install -y curl

# Install nodejs version 20

## Download nodesource
curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
## Setup node source
bash nodesource_setup.sh
## Install Nodejs
apt-get install -y nodejs

# Install pm2
npm install pm2@latest express