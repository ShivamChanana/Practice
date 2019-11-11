class userCreator{
    constructor(name,score){
this.name = name
this.score = score
}
increment(){
    this.score++
}
login(){
    console.log('login')
}
}

const user1 = new UserCreator('Tom', 4)
const user2 = new UserCreator('Plant',5)

user1.increment()