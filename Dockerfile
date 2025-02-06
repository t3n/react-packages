FROM node:21.7.3-alpine3.18

COPY --chown=1000:1000 . /app

WORKDIR /app

USER node

CMD ["npm", "run", "serve:storybook"]
