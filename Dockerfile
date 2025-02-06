FROM node:22.13.1-bookworm

COPY --chown=1000:1000 . /app

WORKDIR /app

USER node

CMD ["npm", "run", "serve:storybook"]
