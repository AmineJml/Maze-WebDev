window.onload = () => {
    const element_score = document.getElementsByClassName("boundary example")
    const boundary_element = document.getElementsByClassName("boundary")
    const game_element = document.getElementById("game")
    


    let score = 0;
    let inGame = false

    const start_element = document.getElementById("start")
    start_element.addEventListener("mouseenter", () => {
        inGame = true;


        for (let j = 0; j < boundary_element.length; j++) {
            if (inGame) {
                boundary_element[j].style.backgroundColor = "#eeeeee"
            }

        }
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
                element_score[0].innerHTML =  score

            }
        })
    }

    //mouse exit the boundaries
    for (let i = 0; i < boundary_element.length; i++) {
        game_element.addEventListener("mouseleave", () => {
            if (inGame) {
                console.log("ana l bandura l hamra")
                for (let j = 0; j < boundary_element.length - 1; j++) {

                    boundary_element[j].style.backgroundColor = "red"
                }
                inGame = false
                score-= 10;
                element_score[0].innerHTML =  score



            }

        })
    }

    const end_element = document.getElementById("end")
    //mouse gets to end
    end_element.addEventListener("mouseenter", () => {
        if (inGame) {

        for (let j = 0; j < boundary_element.length - 1; j++) {
                boundary_element[j].style.backgroundColor = "green"
            }
        
  
        score+= 5;
        element_score[0].innerHTML =  score

        inGame = false

        }

        console.log("easy peazy lemon squeazy" + score)
    })


    const element_reset = document.getElementById("start")
    element_reset.onclick =() =>
    {
        score = 0;
        element_score[0].innerHTML =  score


    }

}