FROM alpine:3.16 as buildenv

# build dependencies
RUN apk update && \
    apk add build-base python3 cmake autoconf automake libtool libgsasl-dev \
            libexecinfo-dev zlib-dev curl-dev nodejs npm

WORKDIR /var/task
COPY . .

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN npm install
RUN npm install aws-sdk aws-lambda-ric

FROM alpine:3.16 as final

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

# Install dependencies
RUN apk add --no-cache bash chromium chromium-chromedriver nss freetype freetype-dev harfbuzz ca-certificates ttf-freefont nodejs npm yarn

WORKDIR /var/task
COPY --from=buildenv /var/task /var/task

ENTRYPOINT ["/usr/local/bin/npx", "aws-lambda-ric"]
CMD ["app.handler"]