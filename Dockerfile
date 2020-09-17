# 使用node最新版本
FROM node:12

# env set
ENV devlopment="/"
ENV production="./"

WORKDIR /
COPY package.json /
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
