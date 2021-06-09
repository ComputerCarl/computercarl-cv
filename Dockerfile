# https://medium.com/greedygame-engineering/so-you-want-to-dockerize-your-react-app-64fbbb74c217
# we want a specified version, not latest
FROM node:12.13 as build
# set working directory (on Docker Node image)for  all subsequent relative commands will reference
WORKDIR /usr/src/app
# copy the Node config files
COPY  package*.json ./
# install the dependencies
RUN npm install
# have to go global with Gatsby
RUN npm install -g gatsby-cli
RUN gatsby telemetry --disable
# copy the rest of our stuff over
COPY . .
RUN gatsby build

FROM nginx:alpine
# run nginx with default options because not copying a config file?
COPY --from=build /usr/src/app/public /usr/share/nginx/html/
# expose the Node port
EXPOSE 80