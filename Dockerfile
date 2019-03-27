# ---- Base image ----
FROM node:8.12.0-slim as base
RUN yarn config set proxy "$http_proxy" && yarn config set https-proxy "$https_proxy"

ENV WORKDIR /opt/app
WORKDIR ${WORKDIR}

COPY package.json ./

# Update & Install theses apps.
RUN yarn install --production  \
    && yarn cache clean

# ---- Build image ----
FROM base as build
#RUN apt-get update && apt-get install -y bzip2 git
RUN apt-get install -y bzip2 git
COPY . ./
RUN yarn install \
    && yarn setup \
    && rm -rf /opt/app/.git

# ---- Runtime image ----
FROM base as runtime
COPY --from=build ${WORKDIR}/app app/
COPY --from=build ${WORKDIR}/public public/
COPY --from=build ${WORKDIR}/server.js ${WORKDIR}/app.js ${WORKDIR}/git.properties.json ./
EXPOSE 3000
CMD ["yarn", "start" ]
