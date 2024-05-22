#!/bin/bash

# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash

# fnm
export PATH="/home/ssm-user/.local/share/fnm:$PATH"
eval "`fnm env`"

source ~/.bashrc

# download and install Node.js
fnm use --install-if-missing 20

npm install