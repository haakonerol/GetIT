function getUser(userName,password){

  let user =  model.data.users.find(user=>{
        user.userName===userName&&user.password===password
    })
    return user
}