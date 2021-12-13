FROM node:lts-alpine

# Make app
RUN mkdir app
WORKDIR /app
COPY package.json package-lock.json* /app/

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
