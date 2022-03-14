/**
 * Throttling Implementation ( handle intermediate state at controlled rate )
 *
 * - RATE Limitter uses Throttling which run's in interval
 * - Throttling a button click so we can’t spam click
 * - Throttling a mousemove/touchmove event handler.
 *
 * https://medium.com/walkme-engineering/debounce-and-throttle-in-real-life-scenarios-1cc7e2e38c68
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
