FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
RUN npm install -g concurrently

COPY . .

EXPOSE 8080

CMD ["concurrently", "npm:compi", "npm:start", "npm:build"]