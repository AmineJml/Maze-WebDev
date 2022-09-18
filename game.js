window.onload = () => {

    const start_element = document.getElementById("start")
    start_element.addEventListener("mouseenter", () => {
        console.log("ana l bandura l hamra")


    })

    const boundary_element = document.getElementsByClassName("boundary")
    for(let i = 0; i <boundary_element.length; i++)
    {
        boundary_element[i].addEventListener("mouseenter", () => {
            if(i<1)
            {
                console.log("ana l bandura l hamra" )

            }

            else
            {
            console.log("gg easy dr get rekt" + i)
            }
    
    
        })
    }

}



//         if(start_element.onmouseenter == true)
//         {
//             console.log("SIUUUUUUU")
//         }
// }