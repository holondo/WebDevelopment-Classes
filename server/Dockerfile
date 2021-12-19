FROM node:lts-alpine

# Make app
RUN mkdir app
WORKDIR /app
COPY package.json package-lock.json* /app/

RUN npm install

COPY bin /app/bin
COPY data /app/data
COPY public /app/public
COPY src /app/src

CMD ["npm", "run", "start"]
