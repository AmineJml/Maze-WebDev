// var str = prompt("enter your name");
// var element = document.getElementById("my_title");
// console.log(element);

// // element.innerText = str; //innertext is only to add text, innerhtml allows to add html tags + text
// element.innerHTML = "<i> Hello </i>" +str;
// element.style.color = "red";

// window.onload = () => { // a functionw ill be called automatrically and can b reused
//     var x = document.getElementsByClassName("el"); //returns a collection or array
//     x[0].style.color = "red";
//     for(var y = 1; y < x.length; y++){
//         x[y].style.color = "green";
//     }
// }






document.getElementById('btn_login').onclick = () =>{
    const username = document.getElementById("input_txt_username")
    const password = document.getElementById("input_txt_password")

    let password = localStorage.getItem(username);
    
    if(username.value == "" || password == "")   {
        alert("Please fill in the blanks")
        return
    }
    if(username.value == "admin" && password.value =="admin"){
        alert("logging in")
    }
    else
    {
        alert("Invalid username or password")
        return
    }
    console.log( username.value  + password.value)

}



 
