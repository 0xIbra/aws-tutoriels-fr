FROM node:18-buster-slim AS buildenv

RUN apt update -y
RUN apt install -y ca-certificates wget lsb-release software-properties-common xdg-utils python \
    autoconf libtool g++ make unzip libcurl4-openssl-dev

# Testing
RUN mkdir -p /usr/cmake-path
RUN wget https://github.com/Kitware/CMake/releases/download/v3.20.2/cmake-3.20.2-linux-x86_64.sh
RUN chmod +x cmake-3.20.2-linux-x86_64.sh
RUN ./cmake-3.20.2-linux-x86_64.sh --skip-license --prefix=/usr/cmake-path
ENV PATH "/usr/cmake-path/bin:$PATH"

WORKDIR /var/task
COPY . .
RUN npm install aws-sdk aws-lambda-ric

# Last stage for final result
FROM node:18-buster-slim AS finalstage

RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
        fonts-liberation \
        libappindicator3-1 \
        libasound2 \
        libatk-bridge2.0-0 \
        libatk1.0-0 \
        libc6 \
        libcairo2 \
        libcups2 \
        libdbus-1-3 \
        libexpat1 \
        libfontconfig1 \
        libgbm1 \
        libgcc1 \
        libglib2.0-0 \
        libgtk-3-0 \
        libnspr4 \
        libnss3 \
        libpango-1.0-0 \
        libpangocairo-1.0-0 \
        libstdc++6 \
        libx11-6 \
        libx11-xcb1 \
        libxcb1 \
        libxcomposite1 \
        libxcursor1 \
        libxdamage1 \
        libxext6 \
        libxfixes3 \
        libxi6 \
        libxrandr2 \
        libxrender1 \
        libxss1 \
        libxtst6 \
        lsb-release \
        wget \
        xdg-utils

WORKDIR /var/task
COPY --from=buildenv /var/task/ .

ENTRYPOINT ["/usr/local/bin/npx", "aws-lambda-ric"]
CMD ["app.handler"]