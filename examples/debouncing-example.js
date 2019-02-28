/**
 * Write a function to debounce another function. Repeated invocations within a certain time window
 * will be grouped together so that the underlying function is only invoked once at the end.
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
 */

function debounce(inputFn, wait) {

  let timeout;

  let wrapper = function(){
    let arg = arguments;
    let callFunction = function() {
      timeout = null;
      inputFn.apply(this, arg);
    }

    clearTimeout(timeout);
    timeout = setTimeout(callFunction, wait);
  }

  return wrapper;
}

let i = 0;
function yourFn(prefix = 'default') {
  i++;
  console.log(prefix + ' ' + i);
}
const yourDebouncedFn = debounce(yourFn, 1000);
yourDebouncedFn('foo');
yourDebouncedFn('bar');
yourDebouncedFn('foo1');
yourDebouncedFn('bar1');
yourDebouncedFn('foo2');
yourDebouncedFn('bar2');
setTimeout(() => {
  yourDebouncedFn('baz');
}, 2000);
