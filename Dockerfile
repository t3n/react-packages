FROM node:11-alpine

COPY --chown=1000:1000 . /app

WORKDIR /app

USER node

RUN npm install

CMD ["npm", "run", "serve:storybook"]
