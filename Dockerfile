FROM node:10-alpine

WORKDIR /expensetracker

COPY . .

RUN npm install

RUN npm run build

CMD ["node", "./bin/prod"]