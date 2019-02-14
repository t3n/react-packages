FROM node:11-alpine

COPY --chown=1000:1000 . /app

WORKDIR /app

CMD ["npm", "run", "serve:storybook"]
