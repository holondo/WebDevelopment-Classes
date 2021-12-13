FROM node:lts-alpine

# Make app
RUN mkdir app
WORKDIR /app
COPY package.json package-lock.json* /app/

RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "serve"]
