/**
 * The publisher/subscriber pattern is a design pattern that allows us
 * to create powerful dynamic applications with modules that can communicate
 * with each other without being directly dependent on each other.
 *
 * The pattern is quite common in JavaScript and has a
 * close resemblance to the observer pattern in the way it works,
 * except that in the observer pattern,
 * an observer is notified directly by its subject whereas in
 * the publisher/subscriber the subscriber is notified through a
 * channel that sits in between the publisher and subscriber that
 * relays the messages back and forth.
 *
 * Hint:
 * - Similar to Observer Pattern
 * - Subscriber is notified through a channel which SITS between
 * publisher and subscriber.
 * 
 * ref:https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/f
 */

/** Factory method which will define publisher/subscriber */

function PubSub() {
  const subscribers = {};

  function subscribe(eventName, callback) {
    if (!subscribers[eventName]) subscribers[eventName] = [];
    subscribers[eventName].push(callback);

    const index = subscribers[eventName].length - 1;

    return {
      /** helps in preventing memomry leaks caused by many callbacks */
      unsubscribe() {
        subscribe[eventName] && subscribe[eventName].splice(index, 1);
        console.log("unsubsribed event with name : " + eventName);
      },
    };
  }

  /**
   * Publish
   * - event fired with eventName, data
   * - check if the event with eventName event registered first
   */
  function publish(eventName, data) {
    if (!subscribers[eventName]) {
      return;
    }

    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  return {
    subscribe,
    publish,
  };
}

let ps = PubSub();
let showDate = (date) => console.log(date); // <-- callback
ps.subscribe("date", showDate); // <-- subscribing
ps.publish("date", "12/12/2022");

ps.subscribe("date", showDate); // <-- subscribing
ps.publish("date", "12/12/2022");

const unsubscribe = ps.subscribe("food", function (data) {
  console.log(`Received some food: ${data}`);
});

unsubscribe.unsubscribe();
