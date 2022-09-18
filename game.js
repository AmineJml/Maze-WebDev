window.onload = () => {
    const nochange_element = document.getElementsByClassName("boundary example")
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

    const boundary_element = document.getElementsByClassName("boundary")
    for (let i = 0; i < boundary_element.length; i++) {
        boundary_element[i].addEventListener("mouseenter", () => {
            if (inGame) {
                console.log("ana l bandura l hamra")
                for (let j = 0; j < boundary_element.length - 1; j++) {

                    boundary_element[j].style.backgroundColor = "red"
                }
                inGame = false

            }
        })
    }

    const game_element = document.getElementById("game")
    for (let i = 0; i < boundary_element.length; i++) {
        game_element.addEventListener("mouseleave", () => {
            if (inGame) {
                console.log("ana l bandura l hamra")
                for (let j = 0; j < boundary_element.length - 1; j++) {

                    boundary_element[j].style.backgroundColor = "red"
                }
                inGame = false

            }
        })
    }

    const end_element = document.getElementById("end")
    end_element.addEventListener("mouseenter", () => {
        for (let j = 0; j < boundary_element.length - 1; j++) {
            if (inGame) {
                boundary_element[j].style.backgroundColor = "green"
            }
        }
  
        score++;
        inGame = false



        console.log("easy peazy lemon squeazy" + score)
    })


    const element_reset = document.getElementById("start")
    const element_score = document.getElementsByClassName("boundary example")
    element_reset.onclick =() =>
    {
        score = 0;
        console.log("AAAA")
        element_score.innerHTML = "Amine"

    }

}