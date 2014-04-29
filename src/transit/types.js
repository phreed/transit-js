if(typeof Set == "undefined") {
  var Set = require("es6-set");
}

if(typeof Map == "undefined") {
  var Map = require("es6-map");
}

function Symbol(s) {
  this.s = s;
}

function symbol(s) {
  return new Symbol(s);
}

function UUID(s) {
  this.s = s;
}

function uuid(s) {
  return new UUID(s);
}

function set(arr) {
  return new Set(arr);
}

function map(arr) {
  return new Map(arr);
}

function list(xs) {
  return xs;
}

function date(s) {
  return new Date(s);
}

function byteBuffer(data) {
  return new ByteBuffer(data);
}

function URI(s) {
}

function uri(s) {
  return new URI(s);
}

function ints(xs) {
  return xs;
}

function longs(xs) {
  return xs;
}

function floats(xs) {
  return xs;
}

function doubles(xs) {
  return xs;
}

function bools(xs) {
  return xs;
}

module.exports = {
  symbol: symbol
  uuid: uuid,
  set: set,
  map: map,
  date: date,
  byteBuffer: byteBuffer,
  uri: uri,
  list: list,
  ints: ints,
  longs: longs,
  floats: floats,
  doubles: doubles,
  bools: bools,
  cmap: cmap
};
