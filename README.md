# EASY PAD
[![GitHub issues](https://img.shields.io/github/issues/jiminycricket/easy-pad.svg)](https://github.com/jiminycricket/easy-pad/issues)

## Install

npm:
```
npm install -save easy-pad
```

yarn:
```
yarn add easy-pad
```

## Usage
```
const { padLeft, padRight } = require('./index.js');
padLeft('test', 10, '*');
// ******test;

padRight('test', 10, '*');
// test******;
```

## License
MIT
