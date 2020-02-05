FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --silent

COPY . .

ENV HOST=0.0.0.0