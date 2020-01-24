This project was bootstrapped with [NODE-MEDIA-SERVER](https://github.com/illuspas/Node-Media-Server).

## Getting started

Install Node Media Serer Server

npm version

### `npm install`

Create a start script with server information and port accordingly:

### `"start": "json-server -p 3001 -w db.json"`

Start JSON Server

### `npm start`

### `npm version`

const NodeMediaServer = require('node-media-server');

const config = {
rtmp: {
port: 1935,
chunk_size: 60000,
gop_cache: true,
ping: 30,
ping_timeout: 60
},
http: {
port: 8000,
allow_origin: '\*'
}
};

var nms = new NodeMediaServer(config)
nms.run();
