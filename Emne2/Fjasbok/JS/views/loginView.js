
function loginView(){
    document.getElementById('app').innerHTML= `
    
    <div>
    <input>
    <input>
    <button onclick="login()">Login</button>
    <p>Har du ikke profil?
    <span onclick='registerUser()'>Registrer her</span></p>
    </div>
    
    
    `
}