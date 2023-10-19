FROM node:20-slim

WORKDIR /app

# ENV NEXT_TELEMETRY_DISABLED 1

# TEST: Install psql
# RUN apt-get update && apt-get install -y postgresql-client

COPY package*.json ./
RUN yarn

COPY . .

# TEST: WAIT FOR IT
# COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
# RUN chmod +x /usr/local/bin/wait-for-it.sh
# TEST: WAIT FOR IT

EXPOSE 3000

RUN yarn build

# ORIGINAL, TO KEEP:
CMD ["sh", "-c", "node populate-db.ts && npm start"]

# TEST: WAIT FOR IT
# CMD ["sh", "-c", "wait-for-it.sh db:5432 -- node populate-db.ts && npm start"]
