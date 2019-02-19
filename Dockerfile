FROM node:10-alpine
WORKDIR /expensetracker
COPY package.json package.json
RUN npm install
