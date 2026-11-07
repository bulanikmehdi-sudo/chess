/*
 * Stockfish.js 19 Lite single-threaded worker bootstrap.
 * Engine: https://github.com/nmrugg/stockfish.js
 * License: GNU GPL v3. The engine files are fetched from the npm package CDN.
 */
var Module = {
  locateFile: function (path) {
    return 'https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/' + path;
  }
};
importScripts('https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/stockfish-19-lite-single.js');
