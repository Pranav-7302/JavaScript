// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest = (principal * rate * time) / 100.


function SimpleInterest(Principal, Rate, Days   ){
    console.log("Principal Amount is: "+Principal);
    console.log("Rate of Interest is: "+Rate)
    console.log("Time Perion in Days: "+Days)
    return (Principal * Rate * (Days/365))/100;
}

console.log("Simple interest is: "+SimpleInterest(10000,10,365));
