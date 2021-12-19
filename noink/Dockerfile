FROM node:lts-alpine

# Make app
RUN mkdir noink
WORKDIR /noink
COPY package.json package-lock.json* /noink/

RUN npm install
COPY src /noink/src
COPY public /noink/public
COPY babel.config.js .eslintrc.js vue.config.js .browserslistrc /noink/

CMD ["npm", "run", "serve"]
