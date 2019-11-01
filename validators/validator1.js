function isValidName(name) {
    if(typeof name === "string" && name.match(/^[A-Za-z]+$/) &&name.length>=3 && name != ""){
    return true;
    }
   else{
    return false;
}
}
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
