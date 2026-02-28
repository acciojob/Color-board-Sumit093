document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container");

    for(let i = 0; i < 800; i++){
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "rgb(29, 29, 29)";
        });

        container.appendChild(square);
    }

    function getRandomColor(){
        const letters = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

});