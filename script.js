function check () {
    console.log("IN CHeck");
    let pass = document.getElementById('#pass');
    let conf_pass = document.getElementById('#confirm-pass');
    if (pass.textContent !== conf_pass.textContent) {
        console.log("IN IF");
        pass.style.border = '2px solid red';
        return false
    }
    return true;
}