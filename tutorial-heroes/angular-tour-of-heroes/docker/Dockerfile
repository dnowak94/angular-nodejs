FROM node:20.10.0-alpine3.19 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG PROFILE
ENV PROFILE ${PROFILE}
RUN echo "Environment: ${PROFILE}"
RUN npm run build-${PROFILE}

# Run
FROM nginx:1.25.3-alpine
COPY --from=builder /app/dist/angular-tour-of-heroes/browser /usr/share/nginx/html
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf