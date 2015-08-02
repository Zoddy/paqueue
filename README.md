# paqueue

paqueue is a small lib for parallel execution of a list of functions. you can add a function that will be called, after every other function in the list is
executed.

## Installation
```bash
$ npm install paqueue
```



## Usage
```js
'use strict';



let pq = require('paqueue');

pq([
  function(done) {
    setTimeout(function() {
      console.log(1);
      done();
    }, 1000);
  },
  function(done) {
    console.log(2);
    done();
  }
], function() {
  console.log('done here');
});

// will output:
// 2
// 1
// done here
```
