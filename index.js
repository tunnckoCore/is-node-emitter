/*!
 * is-node-emitter <https://github.com/tunnckoCore/is-node-emitter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isArray = require('isarray')
var isRealObject = require('is-real-object')

module.exports = function isNodeEmitter (val) {
  return isRealObject(val) &&
    typeof val.on === 'function' &&
    typeof val.once === 'function' &&
    typeof val.emit === 'function' &&
    typeof val.addListener === 'function' &&
    typeof val.removeListener === 'function' &&
    typeof val.setMaxListeners === 'function' &&
    typeof val.removeAllListeners === 'function' &&
    typeof val.listeners === 'function' &&
    tryIt(val)
}

function tryIt (ee) {
  var name = '~~~~~~~foo~~~~~~~bar~~~~~~~'
  var listeners = ee
    .on(name, function () {})
    .on(name, function () {})
    .listeners(name, true)

  return isArray(listeners) && listeners.length >= 2
}
