[![GitHub stars](https://img.shields.io/github/stars/scriptex/random-splice.svg?style=social&label=Stars)](https://github.com/scriptex/random-splice)
[![GitHub forks](https://img.shields.io/github/forks/scriptex/random-splice.svg?style=social&label=Fork)](https://github.com/scriptex/random-splice/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/random-splice/dist/index.min.js.svg)](https://github.com/scriptex/random-splice)
[![Build Status](https://travis-ci.org/scriptex/random-splice.svg?branch=master)](https://travis-ci.org/scriptex/random-splice)
[![npm](https://img.shields.io/npm/dt/random-splice.svg)](https://www.npmjs.com/package/random-splice)
[![npm](https://img.shields.io/npm/v/random-splice.svg)](https://www.npmjs.com/package/random-splice)
[![license](https://img.shields.io/github/license/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/random-splice/README.md)](https://github.com/scriptex/random-splice/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/scriptex/random-splice/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/scriptex/random-splice/graphs/commit-activity)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/scriptex/)

# randomSplice

Get random element from array when looping

## Idea

When looping over an array in JavaScript, you sometimes want to get a random item.

One solution is to first shuffle the array and then loop over it.

Another one is to get random element while looping.

## Use case

Lets say that you want to render a word cloud.

Lets say that you do not want to keep the same order each time.

This is where you can use the `randomSplice` function.

## Installation

```console
yarn add random-splice
```

or

```console
npm i random-splice
```

or

Just download this repository and link the files located in dist folder.

## Usage

```javascript
const randomSplice = require('random-splice');
const arr = ['Your', 'Awesome', 'Array'];

while (arr.length) {
	console.log(randomSplice(arr));
}
```

## Notes

1.  This function modifies the original array. This is where its magic comes from
2.  This function accepts only arrays
3.  This function can be used in an ES6 environment

## LICENSE

MIT
