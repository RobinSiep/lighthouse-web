# Lighthouse web
A simple web client for [Lighthouse](https://github.com/RobinSiep/lighthouse), a tool to manage machines over a variety of networks.

## Installation & Usage

### Using Docker
You don't need the source code unless you want to modify the app. To simply run the app you can use Docker to do the following:
```
docker run -t lighthouse-web -p 7101:7101 mellow/lighthouse-web:latest
```

This will serve the web application on port 7101 and connect to Lighthouse on `http://localhost:7102`. To connect to Lighthouse on a different address and to avoid having to mount `.env` file into the container I use [cross-env](https://www.npmjs.com/package/cross-env). Personally I also use Docker Compose which could make the `docker-compose.yml` look like:
```
version: '3'
services:
  lighthouse-web:
    container_name: lighthouse-web
    image: mellow/lighthouse-web:latest
    ports:
      - "7101:7101"
    entrypoint: cross-env LIGHTHOUSE_URL=https://lighthouse.robinsiep.dev:7102/ yarn
    command: start
```

### From source
```
yarn install
yarn start
```

If you want to connect to Lighthouse on a different address you can make a local `.env` file or use `cross-env` as described above.
