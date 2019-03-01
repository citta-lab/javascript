/**
 * Lets understand why we need bind function, then we will implement the bind function ourself
 * instead of using the available one.
 */


 let user = {
     name: 'Bob',
     age: 24,
     sayHi: function(){
         console.log('I am '+this.name+', '+this.age+' years old');
     }
 }

 /**
  * if we want to call this sayHi method we will do below,
  */

  user.sayHi(); // I am Bob, 24 years old

  /**
   * lets call this after certian time using setTimeout.
   * 
   * Note: This will print undefined for this.name because `this` inside 
   * setTimeout is not referring to user object but window/global object.
   * Hence window.name is undefined it is printing that.
   */

   setTimeout(user.sayHi, 1000); // I'm undefined, undefined years old


   /**
    * Different ways we could pass the contex of user when we pass user.sayHi to 
    * setTimeout would be,
    */

    setTimeout(function(){ user.sayHi() }, 1050); // I am Bob, 24 years old
    setTimeout(()=>{ user.sayHi() }, 1100); // I am Bob, 24 years old

    /**
     * IMPORTANT:
     * The above scenario works but if someone changes the user.sayHi to something
     * else before setTimeout happens then setTimeout will reflect the changed one.
     * So it is advisible to use bind. ES5 provides the pattern : Function.prototype.bind, 
     * and it's used like this: function.bind(object);
     */

     let bindSayHi = user.sayHi.bind(user); 
     setTimeout(bindSayHi, 1200); // I am Bob, 24 years old


     /**
      *    NOW LETS IMPLEMENT BIND FUNCTION OUTSELF, 
      * 
      *    Note: instead of Function.prototype.bind we would be implementing a 
      *    bind function which should return fundction with context.
      */

      let buildBind = (inputFun, context) => {
          return function(){
              //captures any default arguments passed to inputFun
              let args = arguments; 
              return inputFun.apply(context, args);
          }
      }

      let builtBindSayHi = buildBind(user.sayHi, user);
      setTimeout(builtBindSayHi, 1500); // I am Bob, 24 years old

      // Note: I will see 6 console logs with one being undefined values