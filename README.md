[![GitHub stars](https://img.shields.io/github/stars/scriptex/random-splice.svg?style=social&label=Stars)](https://github.com/scriptex/random-splice)
[![npm](https://img.shields.io/npm/dt/random-splice.svg)](https://www.npmjs.com/package/random-splice)
[![npm](https://img.shields.io/npm/v/random-splice.svg)](https://www.npmjs.com/package/random-splice)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice)
[![license](https://img.shields.io/github/license/scriptex/random-splice.svg)](https://github.com/scriptex/random-splice)
[![Github file size](https://img.shields.io/github/size/scriptex/random-splice/dist/index.min.js.svg)](https://github.com/scriptex/random-splice)

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

```
yarn add random-splice
```

or

```
npm i random-splice
```

or

Just download this repository and link the files located in dist folder.

## Usage

```
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
