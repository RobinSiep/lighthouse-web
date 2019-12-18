FROM golang:1.13

# Expose port
ENV PORT 7101
ENV GOPATH /go
ENV GO111MODULE on
EXPOSE 7101

# Override the base log level (info)
ENV NPM_CONFIG_LOGLEVEL warn

# Update and install system dependencies
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install -g yarn

# Build Caddy
RUN go get github.com/caddyserver/caddy/caddy

# Create workdir
RUN mkdir -p lighthouse-web
WORKDIR /lighthouse-web

# Install package dependencies
COPY package.json package.json
RUN yarn install

# Copy project files into image
COPY . .

RUN yarn run build

CMD ["yarn", "run", "start:prod"]
