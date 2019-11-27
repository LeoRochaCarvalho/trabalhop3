var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');


btnLogin.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
        alert("Funcionario Conectado!");
        // console.log("Success!");
        window.location.replace('Usuario/usuario.html');

    }).catch(function (error) {
        // Handle Errors here.
        alert("Funcionario não encontrado!");
        // ...

        alert(errorMessage);
        // console.log("Failure!")
    });

});