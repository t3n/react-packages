FROM node:lts

COPY --chown=1000:1000 . /app

WORKDIR /app

RUN npm config set unsafe-perm true

CMD ["npm", "run", "serve:storybook"]
