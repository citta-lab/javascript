## Challenges

### Functions
1. Tip Calculator : Calculate the tip for given amount, if the tip percentage is not provided then consider 20% by default and return the total amount the customer has to pay.
```javascript
let tipCalculation = function(amount, tipPerfecnt=0.2){
    //if the number is not really a percentage
    if(tipPerfecnt > 1) return amount

    let tipAmount = amount * tipPerfecnt;
    return amount + tipAmount;
}

let result = tipCalculation(145.40,0.25);
console.log(result);
```

2. Grade Calculator : For a given total and scored value calculate the grade student has scored and interpolate the string to out out the result like `You got a A (92%)`.
```javascript
let gradeCalculator = function(total, scored){
    let cal = scored/total;
    let grade = null;
    switch(true){
        case cal >= 0.9:
            grade = 'A';
            break;
        case cal >= 0.8 && cal < 0.9:
            grade = 'B';
            break;
        case cal >= 0.7 && cal < 0.8:
            grade = 'C';
            break;
        case cal >= 0.6 && cal < 0.7:
            grade = 'D';
            break;
        case cal >= 0.5 && cal < 0.6:
            grade = 'F';
            break;
        default:
            grade = 'E';
            break;
    }

    let result = `You got a ${grade} (${cal*100}%)`;
    console.log(result)
}

gradeCalculator(20,5)
```
