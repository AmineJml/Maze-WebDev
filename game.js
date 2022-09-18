function saveScore(score){

    const username = localStorage.getItem("loggedUser")
    const user = JSON.parse(localStorage.getItem(username))
    user["score"] = score;
    localStorage.setItem(username , JSON.stringify( user))
}

window.onload = () => {
    const element_score = document.getElementsByClassName("boundary example")
    const boundary_element = document.getElementsByClassName("boundary")
    const game_element = document.getElementById("game")
    const start_element = document.getElementById("start")
    const end_element = document.getElementById("end")
    const element_reset = document.getElementById("start")
    const status = document.getElementById("status")

    let score = 0;
    let inGame = false
    const username = localStorage.getItem("loggedUser")
    const user = JSON.parse(localStorage.getItem(username))
    if (user != null){

        score = user["score"];

    }
    element_score[0].innerHTML = score










    //hovering over start
    start_element.addEventListener("mouseenter", () => {
        inGame = true;


        for (let j = 0; j < boundary_element.length; j++) {
            if (inGame) {
                boundary_element[j].style.backgroundColor = "#eeeeee"
            }

        }
        status.innerHTML= "Begin by moving your mouse over the 'S'"
        console.log("ana l bandura l hamra")


    })



    //Mouse enter the boundaries
    for (let i = 0; i < boundary_element.length; i++) {
        boundary_element[i].addEventListener("mouseenter", () => {
            if (inGame) {
                console.log("ana l bandura l hamra")
                for (let j = 0; j < boundary_element.length - 1; j++) {

                    boundary_element[j].style.backgroundColor = "red"
                }
                inGame = false

                score-= 10;
                saveScore(score)
                element_score[0].innerHTML =  score


                status.innerHTML= "You lost"

            }
        })
    }

    //mouse exit the boundaries (goes to body)
    for (let i = 0; i < boundary_element.length; i++) {
        game_element.addEventListener("mouseleave", () => {
            if (inGame) {
                console.log("ana l bandura l hamra")
                for (let j = 0; j < boundary_element.length - 1; j++) {

                    boundary_element[j].style.backgroundColor = "red"
                }
                inGame = false
                score-= 10;
                saveScore(score)
                element_score[0].innerHTML =  score


                status.innerHTML= "You lost"





            }

        })
    }

    //mouse gets to end
    end_element.addEventListener("mouseenter", () => {
        if (inGame) {

        for (let j = 0; j < boundary_element.length - 1; j++) {
                boundary_element[j].style.backgroundColor = "green"
            }
        
  
        score+= 5;
        saveScore(score)
        element_score[0].innerHTML =  score


        inGame = false

        }

        console.log("easy peazy lemon squeazy" + score)
        status.innerHTML= "You won"



    })


    //reset game
    element_reset.onclick =() =>
    {
        score = 0;
        saveScore(score)
        element_score[0].innerHTML =  score
        



    }
    

}