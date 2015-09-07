# [is-node-emitter][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Strictly checks that given value is nodejs EventEmitter or something like it. It's easy, because his API is in frozen state.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-node-emitter --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isNodeEmitter = require('is-node-emitter')

// emitters
var Emitter = require('events').EventEmitter
var DualEmitter = require('dual-emitter')
var ChildProcess = require('child_process')
var EventEmitter2 = require('eventemitter2').EventEmitter2
var EventEmitter3 = require('eventemitter3')
var ComponentEmitter = require('component-emitter')

// from iojs 2.x
var ChildProcessCtor = require('child_process').ChildProcess
```

### returns `true`

```js
var fs = require('fs')

isNodeEmitter(fs.createReadStream('./index'))
isNodeEmitter(new Emitter())
isNodeEmitter(new EventEmitter2({wildcard: false}))
isNodeEmitter(new ChildProcessCtor())
isNodeEmitter(ChildProcess.spawn('echo', ['hello']))
isNodeEmitter(ChildProcess.exec('echo hello'))
```

### returns `false`

```js
isNodeEmitter(DualEmitter())
isNodeEmitter(ComponentEmitter())
isNodeEmitter(new DualEmitter())
isNodeEmitter(new ComponentEmitter())
isNodeEmitter(new EventEmitter3())
```


## Related
- [component-emitter](https://github.com/component/emitter): Event emitter
- [dual-emitter](https://github.com/tunnckocore/dual-emitter): :tropical_drink: EventEmitter done right and no dependencies. For nodejs and the browser (>= IE8). Can emit custom or DOM events.
- [dush](https://github.com/tunnckocore/dush): Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [eventemitter2](https://github.com/hij1nx/EventEmitter2): A Node.js event emitter implementation with namespaces, wildcards, TTL and browser support.
- [eventemitter3](https://github.com/primus/eventemitter3): EventEmitter3 focuses on performance while maintaining a Node.js AND browser compatible interface.
- [kudos](https://github.com/tunnckocore/kudos): kudos done right - unopinionated, made simple, so simple it hurts!
- [to-emitter](https://github.com/jonschlinkert/to-emitter): Convert any object into an event-emitter, and emits events with the name of any any method called on the object.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-node-emitter/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-node-emitter
[npmjs-img]: https://img.shields.io/npm/v/is-node-emitter.svg?label=is-node-emitter

[license-url]: https://github.com/tunnckoCore/is-node-emitter/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-node-emitter
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-node-emitter.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-node-emitter
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-node-emitter.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-node-emitter
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-node-emitter.svg

[david-url]: https://david-dm.org/tunnckoCore/is-node-emitter
[david-img]: https://img.shields.io/david/tunnckoCore/is-node-emitter.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg