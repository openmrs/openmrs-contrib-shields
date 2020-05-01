FROM node:14.1.0

EXPOSE 3033

COPY . /app

WORKDIR /app

RUN npm install

CMD ["node", "index.js"]