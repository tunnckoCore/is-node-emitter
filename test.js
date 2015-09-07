/*!
 * is-node-emitter <https://github.com/tunnckoCore/is-node-emitter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isNodeEmitter = require('./index')
var Emitter = require('events').EventEmitter
var DualEmitter = require('dual-emitter')
var ChildProcess = require('child_process')
var EventEmitter2 = require('eventemitter2').EventEmitter2
var EventEmitter3 = require('eventemitter3')
var ComponentEmitter = require('component-emitter')
var ChildProcessCtor = require('child_process').ChildProcess

function isEmitter (val, bool) {
  var ee = isNodeEmitter(val)
  test.strictEqual(ee, bool)
}

test('should return `true` if nodejs emitter or alike', function (done) {
  isEmitter(new Emitter(), true)
  isEmitter(new EventEmitter2({wildcard: false}), true)
  isEmitter(new ChildProcessCtor(), true)
  isEmitter(ChildProcess.spawn('echo', ['hello']), true)
  isEmitter(ChildProcess.exec('echo hello'), true)
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
