FROM node
ENV NODE_ENV=production
WORKDIR /app
COPY --chown=1000:1000 . /app
CMD ["npm", "run", "storybook"]