FROM node:16.14.0 AS initiator
# FROM node:16.13.1-alpine

# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package-lock.json .
Copy ./docker/package.json .
COPY .env .
# RUN apk update && apk upgrade
# RUN apk add git

## builder
## -------
FROM initiator as builder
ENV NODE_ENV development
ENV PORT 3002
ENV HOST 0.0.0.0
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build
# RUN npm run generate

## starter
## -------
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as deploy
ENV NODE_ENV development
# Copy built assets from prod_builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3002
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
