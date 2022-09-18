document.getElementById('btn_signup').onclick = () =>
{
    const username = document.getElementById("input_txt_signup_username")
    const password = document.getElementById("input_txt_signup_password")
    const password_confirmation = document.getElementById("input_txt_signup_password_confirmation")
    let score = "SSSS"

    if(username.value == "" || password == "" || password_confirmation =="") 
    {
        alert("Please fill in the blanks")
        return
    }

    if(localStorage.getItem(username) == "admin" )
    {
        alert("user already exist")
        return
    }

    if(password.value == password_confirmation.value && username != "")
    {
        alert("new account")
        let myValues = [password.value, score]
        localStorage.setItem(username, JSON.stringify( myValues));
        console.log(localStorage.getItem(username))

    }

    else
    {
        alert("Invalid username or password")
        return
    }



}
    