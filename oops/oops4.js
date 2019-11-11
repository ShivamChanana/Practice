function UserCreator(name,score){
    this.name = name
    this.score = score
}

UserCreator.prototype.increment = function(){
    // arrow function will change the reference of 'this' keyword from global window object to user1 object. 
    const add1=()=>{
        this.score++
    }
    add1()
}

UserCreator.prototype.login = function(){
    console.log("ur log in")
}

const user1 = new UserCreator('Tom', 5)
const user2 = new UserCreator('Plant', 6)

user1.increment()