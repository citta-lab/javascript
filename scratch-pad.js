function sum (x){
    let result = x;
    return function resultSum (y) {
        if(arguments.length){
            result = result + y;
            return resultSum
        }
        return result;
    }
}

console.log(sum(2)(3)(4)(9)());