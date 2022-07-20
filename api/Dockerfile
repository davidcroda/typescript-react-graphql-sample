FROM node:18-alpine as dev
WORKDIR /app

FROM dev as deploy
RUN yarn install
COPY . /app/
CMD ["yarn", "ts-node", "api/index.ts"]
