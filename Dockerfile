FROM node:10

WORKDIR /usr/src/app
COPY Dockerfile package.json* ./
RUN if [ -e "package.json" ]; then npm install; fi

CMD if [ -e "package.json" ]; then npm start; else /bin/bash; fi
