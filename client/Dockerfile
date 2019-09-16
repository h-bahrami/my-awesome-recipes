FROM node:12.2.0-alpine

WORKDIR /usr/frontend

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent

COPY . .

EXPOSE 3000
CMD ["npm", "start"]