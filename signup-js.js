const usernameInput = document.getElementById("input_txt_signup_username")
const passwordInput = document.getElementById("input_txt_signup_password")
const password_confirmationInput = document.getElementById("input_txt_signup_password_confirmation")
const score = 0

document.getElementById('btn_signup').onclick = () => {

    const username = usernameInput.value
    const password = passwordInput.value
    const password_confirmation = password_confirmationInput.value;
    if (username == "" || password == "" || password_confirmation == "") {
        alert("Please fill in the blanks")
        return
    } else {

        if (localStorage.getItem(username)) {
            alert("user already exist")
            return
        } else if (password == password_confirmation) {
            
            const user = {"password": password , "score": score}
            localStorage.setItem(username, JSON.stringify(user));
            console.log(JSON.parse(localStorage.getItem(username)))
            alert("new account")
            

        }

    }





    



}