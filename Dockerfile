FROM node:boron
WORKDIR /usr/src/server
COPY package.json .
RUN npm install
COPY src/ .
EXPOSE 5000

CMD [ "npm", "start" ]
