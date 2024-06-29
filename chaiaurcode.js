function randomColor () {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random()*16)]
    }
    return color
}
let changing;

document.querySelector("#start").addEventListener("click", function (){
    if (!changing) {
        changing = setInterval(changeColor, 500)
    }

    function changeColor (){
        document.querySelector("body").style.backgroundColor = randomColor();
    }
})

document.querySelector("#stop").addEventListener("click", function (){
    clearInterval(changing)
    changing = null
})