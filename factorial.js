function factorial(n){
    var product = 1;
    while(n>1){
    product *= n
    n--;
}
return product;
}

const ans = factorial(5);
console.log(ans)