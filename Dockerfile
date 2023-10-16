FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["sh", "-c", "node populate-db.ts && npm start"]
