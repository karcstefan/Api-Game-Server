FROM node:boron
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY src/ .
EXPOSE 5000

CMD [ "npm", "start" ]