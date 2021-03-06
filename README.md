# log-ok [![NPM version](https://img.shields.io/npm/v/log-ok.svg?style=flat)](https://www.npmjs.com/package/log-ok) [![NPM downloads](https://img.shields.io/npm/dm/log-ok.svg?style=flat)](https://npmjs.org/package/log-ok) [![Build Status](https://img.shields.io/travis/jonschlinkert/log-ok.svg?style=flat)](https://travis-ci.org/jonschlinkert/log-ok)

just `console.log` prefixed with a green check

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save log-ok
```

## Usage

```js
var ok = require('log-ok');

ok('success!');
```

Results in:

![log-ok example](example.png)

Respects leading whitespace, so:

```js
ok('    success!');
```

Results in:

![log-ok example whitespace](example-indented.png)

## Related projects

You might also be interested in these projects:

* [ansi-colors](https://www.npmjs.com/package/ansi-colors): Collection of ansi colors and styles. | [homepage](https://github.com/doowb/ansi-colors "Collection of ansi colors and styles.")
* [log-utils](https://www.npmjs.com/package/log-utils): Basic logging utils: colors, symbols and timestamp. | [homepage](https://github.com/jonschlinkert/log-utils "Basic logging utils: colors, symbols and timestamp.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new). Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/log-ok/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 19, 2016._