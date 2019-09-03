# fake-promise-util [![Build Status](https://travis-ci.com/jstavanja/fake-promise-util.svg?branch=master)](https://travis-ci.com/jstavanja/fake-promise-util)

> Util for simple promise simulation with optional delay.

## Install

```
$ npm install fake-promise-util
```


## Usage

To simulate a delayed success, use the success method.

```js
const fakePromiseUtil = require('fake-promise-util');

const returnValue = 'Some successful result 🐵';
const delayInMs = 1000;

console.log(await fakePromiseUtil.success(returnValue, delayInMs))

// (after 1 second) => 'Some successful result 🐵'
```

To simulate a delayed fail, use the fail method.

```js
const fakePromiseUtil = require('fake-promise-util');

const returnValue = 'Some error text 🙈';
const delayInMs = 1000;

try {
    await fakePromiseUtil.fail(returnValue, delayInMs)
} catch (err) {
    console.log(err.message);
}
    
// (after 1 second) => 'Some error text 🙈'
```

## API

### success(returnValue?, delay?)

#### returnValue?

Type: `any`

Default: `true`

Anything you wish to succesfully return from the promise.

#### delay?

Type: `number`

Default: `0`

An optional delay that you can use to simulate a real world promise scenario.

### fail(errorMessage?, delay?)

#### errorMessage?

Type: `string`

Default: `Yikes.`

A string you wish to use as the error messsage, when the error is thrown inside the promise.

#### delay?

Type: `number`
Default: `0`

An optional delay that you can use to simulate a real world promise scenario.
