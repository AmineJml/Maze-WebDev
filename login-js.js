

const usernameInput = document.getElementById("input_txt_username")
const passwordInput = document.getElementById("input_txt_password")
document.getElementById('btn_login').onclick = () => {


    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username == "" || password == "") {
        alert("Please fill in the blanks")
        
    }else{
        const user = JSON.parse(localStorage.getItem(username))
        if(user != null){
            
            if (password == user["password"]){
                const user = JSON.parse(localStorage.getItem(username))


                alert("logging in")
                localStorage.setItem("loggedUser" , username)
                location.assign("game.html")
            }
        }
        else{
            alert("user does not exist")
        }

    }
    

}