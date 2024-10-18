function login() {

    model.app.currentPage='homepage';
    updateView();
}

function registerUser(){
    model.app.currentPage='createAccountpage';
    updateView();
}
