//const button = document.getElementById("btn");
//console.log(button)
//const text = document.querySelector("#text");
//"text" can change depending on index.html
const DOMSelectors = {
    button: document.getElementById("btn"),
    text:document.querySelector("#text"),
    point: document.querySelectorAll(".point"),
    box: document.getElementById("big-black-box"),
};
function backgroundAndText(background, text){
    background.style.backgroundColor = "red";
    text.textContent = "This is now a big red box";
    text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function(){
backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi(){
    DOMSelectors.points.forEach((point)=>{
        console.log(point);
    });
}
changeLi();
