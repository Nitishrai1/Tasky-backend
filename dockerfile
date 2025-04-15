FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 3000

# ENV MONGODB_URL=mongodb://mongodb:27017/taskydb

CMD ["node", "index.js"]
