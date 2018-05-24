FROM node:10

COPY . /srv/fake-api

RUN cd /srv/fake-api && npm install

CMD ["node", "/srv/fake-api/fake-api-service.js", "--config", "/api"]

