(function (x, f=()=> x){
    var x
    var y = x
    x = 2
    console.log(x, y, f())
})
(1);