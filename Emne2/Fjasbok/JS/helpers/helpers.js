function getUser(userName,password){

  return model.data.users.find(user=>
        user.userName===userName&&user.password===password
    );
    
}

