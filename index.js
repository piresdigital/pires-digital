const { join } = require('path');
const { https } = require('firebase-functions');
const { default: next } = require('next');

const nextjsDistDir = join('./', require('./next.config.js').distDir);

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
});

const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjs = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});