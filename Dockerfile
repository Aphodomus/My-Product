FROM node:alpine

WORKDIR /home/interpol/interns-program-myproduct/

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]