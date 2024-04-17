FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install -g nodemon
RUN npm install
EXPOSE 8002
CMD ["npm","start"]


