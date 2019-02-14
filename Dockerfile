FROM node:11-alpine

ENV NODE_ENV=production

COPY --chown=1000:1000 . /app

WORKDIR /app

CMD ["npx", "http-server", "storybook-static"]
