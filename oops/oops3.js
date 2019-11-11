function UserCreator(name,score){
    this.name = name
    this.score = score
}

UserCreator.prototype.increment = function(){
    this.score++
}

UserCreator.prototype.login = function(){
    console.log("ur log in")
}

const user1 = new UserCreator('Tom', 5)
const user2 = new UserCreator('Plant', 6)

user1.increment()