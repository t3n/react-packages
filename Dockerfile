FROM node:lts

COPY --chown=1000:1000 . /app

WORKDIR /app

CMD ["npm", "run", "serve:storybook"]
