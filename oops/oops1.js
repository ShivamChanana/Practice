function userCreator(name,score){
    const newUser = Object.create(userFunctionStore)
    newUser.name = name
    newUser.score = score
	return newUser
}

const userFunctionStore = {
    increment: function(){this.score ++},
    login: function(){console.log("ur log in")}
}

const user1 = userCreator('Tom', '5')
const user2 = userCreator('Plant', '4')

user1.increment()