var a = [1, 2, 5, 6, "hjg"];
var b = [3, 4, 7, 8, "ghf"];
var tmp;
tmp = a;
a = b;
b = tmp;
console.log(`a =`, a);
console.log(`b =`, b);
