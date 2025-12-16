//simple Interest

function simpleinterest(P,R,T){
    return((P*R*T)/100);
}

//Compound interest

function compoundinterest(P,R,T){
    return P*(1+R/100)**T-P;
}

let SI=simpleinterest(10000,10,2);
let CI=compoundinterest(10000,10,2);

console.log("Simple interest",SI);
console.log("Compound Interest",CI)