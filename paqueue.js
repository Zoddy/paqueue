'use strict';



var paqueue = {
  _callback: null,
  _done: 0,
  _queue: null,


  /**
   * callback for the queue functions, so that the queue knows, how much are
   * done. if all are done, the callback from the caller will executed
   */
  _doneCallback: function() {
    if (--this._done === 0) {
      this._callback();
    }
  },

  /**
   * starting the queue
   *
   * @param {array} queue list of functions
   * @param {function()} callback function that will be called, after each
   *     function in the queue is done
   */
  init: function(queue, callback) {
    this._callback = callback;
    this._done = queue.length;
    this._queue = queue;

    this._queue.forEach(function(entry) {
      setTimeout(entry.bind(null, this._doneCallback.bind(this)), 0);
    }, this);
  }
};

module.exports = paqueue.init.bind(paqueue);
