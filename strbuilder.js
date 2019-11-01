const c = function makeCounter(){
    var counter = 0;
    function increment(){
        return ++counter;
    } 
}
c();