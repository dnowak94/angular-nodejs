FROM node:20.10.0-alpine3.19
WORKDIR "/app"
ADD "src/app" "./"
ENV DEBUG=backend:*
CMD [ "npm", "start" ]