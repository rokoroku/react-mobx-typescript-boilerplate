FROM gitpod/workspace-full

COPY yarn.lock package.json /app/
RUN cd /app && yarn
