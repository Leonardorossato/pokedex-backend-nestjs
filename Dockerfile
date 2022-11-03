FROM node:16

WORKDIR /src/main.ts

COPY package*.json ./

EXPOSE 3000

RUN npm install or yarn install

COPY . .

RUN npm buid or yarn build

CMD [ "node", "dist/main.js" ]