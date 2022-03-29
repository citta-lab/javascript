/*****************************************************************
 * 1. How to use Promise ?
 *****************************************************************/

const myPromise = new Promise((resolve, reject) => {
  let data = { example: 1, name: "bob", age: 12 };
  setTimeout(() => {
    resolve(data);
  }, 1000);
});

myPromise.then((res) => console.log(res));

/*****************************************************************
 * 2. How to use Promise in function ?
 *****************************************************************/
const getMyPromise = () => {
  let data = { example: 2, name: " bobby", age: 16 };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

getMyPromise().then((data) => console.log(data));

/*****************************************************************
 * 3. Implement Promise without Async ?
 *****************************************************************/
 
class MyPromise {
    constructor(handlerFn){
        /** constructor 1: pending, reject, fullfill are three states */
        this.state = 'PENDING';

        /** constructor 2: value */
        this.value = null;

        /** constructor 3: defining methods for state handling */
        const resolve = (value) => {
            if(this.state === 'PENDING'){
                this.state = 'FULLFILLED';
                this.value = value;
            }
        }

        const reject = (value) => {
            if(this.state === 'PENDING'){
                this.state = 'REJECTED',
                this.value = value;
            }
        }

        /** constructor 3: return resolve and reject to calling function */
        try{
            handlerFn(resolve, reject);
        }catch(error){
            reject(error);
        }
    }

    /** then method in promise class */
    then(onFulFill, onReject){
        if(this.state === 'FULLFILLED'){
            onFulFill(this.value);
        }else if(this.state === 'REJECTED'){
            onReject(this.value);
        }
    }
}

/** working example */
const firstPromise = new MyPromise((resolve, reject) => resolve('myPromise : resolved'));
firstPromise.then((data) => console.log(data), (error) => console.log(error)); //myPromise : resolved

const secondPromise = new MyPromise((resolve, reject) => reject('myPromise : rejected'));
secondPromise.then((data) => console.log(data), (error) => console.log(error)); //myPromise : rejected

/** async doesn't work */
const thirdPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(' myPromise : resolved'), 1000);
});
thirdPromise.then((data) => console.log(data)); // no console


/*****************************************************************
 * 4. Implement Promise with Async 
 *****************************************************************/
class MyAsyncPromise {
    constructor(handlerFn){
        /** constructor 1: pending, reject, fullfill are three states */
        this.state = 'PENDING';

        /** constructor 3: these will hold the values instead of executing immideatly */
        this.onFulFilledCb = [];
        this.onRejectedCb  = [];

        /** constructor 4: reolve and reject */
        const resolve = (value) => {
            if(this.state === 'PENDING'){
                this.state = 'FULFILLED';
                this.value = value;
                this.onFulFilledCb.forEach((cb) => cb(value));
            }
        }

        const reject = (value) => {
            if(this.state === 'PENDING'){
                this.state = 'REJECTED',
                this.value = value;
                this.onRejectedCb.forEach((cb) => cb(value));
            }
        }

        /** constructor 5: calling handleFn */
        try{
            handlerFn(resolve, reject)
        }catch(e){
            reject(e);
        }
    }

    /** then method */
    then(onFulFill, onReject){
        /** hold util we change the state  */
        if(this.state === 'PENDING'){
            this.onFulFilledCb.push(onFulFill);
            this.onRejectedCb.push(onReject);
        }

        /** if resolved */
        if(this.state === 'FULFILLED'){
            onFulFill(this.value);
        }

        /** if rejected */
        if(this.state === 'REJECTED'){
            onReject(this.value);
        }

    }
}

/** async doesn't work */
const fourthPromise = new MyAsyncPromise((resolve, reject) => {
    setTimeout(() => resolve(' myAsyncPromise : resolved'), 1000);
});
fourthPromise.then((data) => console.log(data)); //  myAsyncPromise : resolved



/***
 * Ref:https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a
 */