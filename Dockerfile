FROM node:latest

WORKDIR /app
ADD package.json .
RUN npm install

COPY client .
WORKDIR /app/client
RUN npm install

WORKDIR /app
COPY . .
RUN chmod +x make_build.sh
RUN bash make_build.sh

EXPOSE 8888

CMD ["npm", "start"]
