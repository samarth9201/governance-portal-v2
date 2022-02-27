FROM node:12.22.6


WORKDIR /usr/src/app
EXPOSE 3000


COPY . .
RUN apt update && apt-get install -y libudev-dev && apt-get install libusb-1.0-0
RUN yarn --non-interactive --frozen-lockfile

RUN yarn build

CMD [ "yarn", "start" ]