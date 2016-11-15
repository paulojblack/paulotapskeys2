# Throw vim on the machine

# FROM  confluent/postgres-bw:0.1
#
# RUN ["apt-get", "update"]
# RUN ["apt-get", "install", "-y", "vim"]

FROM node:argon

RUN npm install nodemon -g && npm install typescript@1.8.10 -g && npm install typings -g
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && typings install

COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
