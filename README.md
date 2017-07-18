# generator-hub-dashboard [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Hub Dashboard Generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-hub-dashboard using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-hub-dashboard
```


##Usage

To create a Dashboard for Currencies with columns:

```Gamebase Id | Key | Name | Code | Symbol```

Start Yeoman Generator:
```bash
yo hub-dashboard
```

Input following:

```
Name for this Component in singular currency
Name for this Component in plural currencies
Properties CSV format gamebaseId,key,name,code,symbol
```


## Getting To Know Yeoman

 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

 © [Srdjan Pajic]()


[npm-image]: https://badge.fury.io/js/generator-hub-dashboard.svg
[npm-url]: https://npmjs.org/package/generator-hub-dashboard
[travis-image]: https://travis-ci.org/pajics/generator-hub-dashboard.svg?branch=master
[travis-url]: https://travis-ci.org/pajics/generator-hub-dashboard
[daviddm-image]: https://david-dm.org/pajics/generator-hub-dashboard.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/pajics/generator-hub-dashboard
