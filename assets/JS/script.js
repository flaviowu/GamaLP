function setForm() {
    let name = document.forms["cadastroForm"]["name"].value;
    let email = document.forms["cadastroForm"]["email"].value;
    localStorage.setItem("cadastro", [name, email])
}

// function printaConsole() {
//     console.log(localStorage.getItem("cadastro"))
// }