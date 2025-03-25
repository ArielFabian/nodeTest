FROM node:22.14.0-alpine

WORKDIR /usr/src/nodeTest

COPY . .

RUN npm i

EXPOSE 3000

CMD ["node", "index.js"]