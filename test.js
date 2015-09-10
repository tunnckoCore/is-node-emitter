/*!
 * is-node-emitter <https://github.com/tunnckoCore/is-node-emitter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var streams = require('stream')
var isStream = require('is-stream')
var isNodeEmitter = require('./index')

var Emitter = require('events').EventEmitter
var DualEmitter = require('dual-emitter')
var ChildProcess = require('child_process')
var EventEmitter2 = require('eventemitter2').EventEmitter2
var EventEmitter3 = require('eventemitter3')
var ComponentEmitter = require('component-emitter')

function isEmitter (val, bool) {
  var ee = isNodeEmitter(val)
  test.strictEqual(ee, bool)
}

test('should return `true` if nodejs emitter or alike', function (done) {
  var ee = new Emitter()
  isEmitter(ee, true)
  test.strictEqual(ee.listeners().length, 0)
  isEmitter(new EventEmitter2({wildcard: false}), true)
  isEmitter(ChildProcess.spawn('echo', ['hello']), true)
  isEmitter(ChildProcess.exec('echo hello'), true)
  done()
})

test('should return `true` for streams', function (done) {
  var read = fs.createReadStream('./index.js')
  var write = read.pipe(fs.createWriteStream('./foobar.js'))
  var stream = new streams.Stream()
  var duplex = new streams.Duplex()
  var readable = new streams.Readable()
  var writable = new streams.Writable()

  isEmitter(read, true)
  isEmitter(write, true)
  isEmitter(stream, true)
  isEmitter(duplex, true)
  isEmitter(readable, true)
  isEmitter(writable, true)

  test.strictEqual(isStream(read), true)
  test.strictEqual(isStream(write), true)
  test.strictEqual(isStream(stream), true)
  test.strictEqual(isStream(duplex), true)
  test.strictEqual(isStream(readable), true)
  test.strictEqual(isStream(writable), true)
  done()
})

test('should return `false` otherwise', function (done) {
  isEmitter(DualEmitter(), false)
  isEmitter(ComponentEmitter(), false)
  isEmitter(new DualEmitter(), false)
  isEmitter(new ComponentEmitter(), false)
  isEmitter(new EventEmitter3(), false)
  done()
})
