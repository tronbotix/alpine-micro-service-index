# BASE IMAGE
FROM node:alpine

WORKDIR /usr/app

# DOWNLOAD & INSTALL
COPY ./ ./
RUN npm install

# CMD START
CMD ["npm" , "start"]
