FROM node:11-alpine

COPY --chown=1000:1000 . /app

WORKDIR /app

USER node

RUN set -x && \
    npm install && \
    cd packages/t3n-components && npm run build && cd ../.. && \
    cd packages/t3n-storybook && npm run build-storybook

CMD ["npx", "http-server", "storybook-static"]
