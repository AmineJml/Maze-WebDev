window.onload = () => {

    let inGame = false

    const start_element = document.getElementById("start")
    start_element.addEventListener("mouseenter", () => {
        inGame = true;


        for(let j = 0; j <boundary_element.length; j++){
            if(inGame)
            {
                 boundary_element[j].style.backgroundColor = "#eeeeee"
            }

        }
        console.log("ana l bandura l hamra")


    })

    const boundary_element = document.getElementsByClassName("boundary")
    for (let i = 0; i < boundary_element.length; i++) {
        boundary_element[i].addEventListener("mouseenter", () => {

            console.log("ana l bandura l hamra")
            for(let j = 0; j <boundary_element.length; j++){
                if(inGame)
                {
                     boundary_element[j].style.backgroundColor = "red"
                }

            }


        })
    }

}