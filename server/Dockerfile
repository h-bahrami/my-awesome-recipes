FROM node:9.11.2-alpine

WORKDIR /usr/backend

COPY package*.json ./
RUN npm install -gy

COPY . . 

EXPOSE 3001
CMD ["npm", "start"]
