function login() {
    let user= getUser(model.input.login.userName,model.input.login.password)
   console.log(user );
    model.app.currentPage='homepage';
    updateView();
    
}

function registerUser(){
    model.app.currentPage='createAccountpage';
    updateView();
}
