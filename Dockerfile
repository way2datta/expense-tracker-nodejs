FROM node:10-alpine

WORKDIR /expensetracker

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src
COPY bin bin
COPY webpack.config.dev.js webpack.config.dev.js
COPY .babelrc .babelrc

RUN npm install

RUN npm run build

CMD ["node", "./bin/prod"]