/**
 * Throttling Implementation ( handle intermediate state at controlled rate )
 *
 * - RATE Limitter uses Throttling which run's in interval
 * - Throttling a button click so we can’t spam click
 * - Throttling a mousemove/touchmove event handler.
 *
 * https://medium.com/walkme-engineering/debounce-and-throttle-in-real-life-scenarios-1cc7e2e38c68
 */

/** 
Throttling: 
Functions wil only get called on specified interval of time, If anything is called between the interval will be
ignored. Example: If we call function at every second it will be ignored until timeInterval is reached.

Debounce:
Here function will only be executed since the last time the function is executed plus the timeInterval. This is 
slight difference between fixed timeInterval

ex: https://github.com/citta-lab/javascript/blob/master/examples/debouncing-example.js
*/
function throttle(inputFn, timeInterval) {
  let timeout;

  let wrapper = function () {
    let args = arguments;
    let clearTimeout = function () {
      timeout = false;
    };

    if (!timeout) {
      inputFn.apply(this, args);
      timeout = true;
      setTimeout(clearTimeout, timeInterval);
    }
  };

  return wrapper;
}

let i = 0;
function yourFn(prefix = "default") {
  i = i + 1;
  console.log(prefix + " " + i);
}

/** will only execute bar2 */
const youtThrottleFn = throttle(yourFn, 1000);
youtThrottleFn("foo");
youtThrottleFn("bar");
youtThrottleFn("foo1");
youtThrottleFn("bar1");
youtThrottleFn("foo2");
youtThrottleFn("bar2");
