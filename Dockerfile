FROM gitpod/workspace-full

COPY yarn.lock package.json ./
RUN yarn
