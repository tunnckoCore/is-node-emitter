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
  var stream = fs.createReadStream('./index.js')
  isEmitter(stream, true)
  test.strictEqual(isStream(stream), true)
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
