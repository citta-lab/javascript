/**
 * Write a function to debounce another function. Repeated invocations within a certain time window
 * will be grouped together so that the underlying function is only invoked once at the end.
 *
 * Example: If we need to take some action upon scrolling on the UI, instead of making update or
 * state changes on every scoll event we can apply debounce to wait for "x" amount of time and
 * execute the function. This is great performance benifit and loaddash has debounce functionality.
 *
 * let i = 0;
 * function yourFn() {
 *   i++;
 *   console.log('Logged ' + i);
 * }
 * const yourDebouncedFn = debounce(yourFn, 1000);
 *
 *
 * // Example 1: Multiple invocations with no pause
 * yourDebouncedFn();
 * yourDebouncedFn();
 * yourDebouncedFn();
 *
 * // Console:
 * // "Logged 1"
 *
 *
 * // Example 2: Multiple invocations with a pause in the middle
 * yourDebouncedFn();
 * yourDebouncedFn();
 * // Wait 1000ms or longer
 * yourDebouncedFn();
 *
 * // Console:
 * // "Logged 2"
 * // "Logged 3"
 *
 * Reference:
 * https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1
 */

function debounce(inputFn, wait) {
  let timeout;

  let wrapper = function () {
    let arg = arguments;

    let callFunction = function () {
      timeout = null;
      inputFn.apply(this, arg);
    };

    /** if any function call comes before "wait" time, we drop it and hence clearTimeout */
    clearTimeout(
      timeout
    ); /** it will be undefined first time and then gets wait time */
    /** execute function after "wait" time and save the timeout so we can clear it */
    timeout = setTimeout(callFunction, wait);
  };

  return wrapper;
}

let i = 0;
function yourFn(prefix = "default") {
  i = i + 1;
  console.log(prefix + " " + i);
}

/** will only execute bar2 */
const yourDebouncedFn = debounce(yourFn, 1000);
yourDebouncedFn("foo");
yourDebouncedFn("bar");
yourDebouncedFn("foo1");
yourDebouncedFn("bar1");
yourDebouncedFn("foo2");
yourDebouncedFn("bar2");

/** will only execute baz */
setTimeout(() => {
  yourDebouncedFn("baz");
}, 2000);
