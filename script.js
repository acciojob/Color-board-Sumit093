//your JS code here. If required.
const container = document.querySelector(".container");

for(let i = 0; i < 800; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
        square.style.background = getRandomColor();
    });

    square.addEventListener("mouseleave", () => {
        square.style.background = "#1d1d1d";
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
