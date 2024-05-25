FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json tsconfig.json ./
COPY ./src ./src

RUN npm install
EXPOSE 3000

CMD ["npm", "run", "start" ]