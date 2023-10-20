//const button = document.getElementById("btn");
//console.log(button)
//const text = document.querySelector("#text");
//"text" can change depending on index.html

//function backgroundAndText(background, text){
 //   background.style.backgroundColor = "red";
   // text.textContent = "This is now a big red box";
    //text.style.fontSize = "40px";
//}

//DOMSelectors.button.addEventListener("click", function(){
//backgroundAndText(DOMSelectors.box, DOMSelectors.text);
//});

//function changeLi(){
 //   DOMSelectors.point.forEach((point)=>{
 //      point.addEventListener("click", function () {

 //      })
  //  });
//}
//changeLi();

//function makeAlbum(){
 //   //const album = somethign{}
    //return an object
//}

//function addCard(Album){

//}

const DOMSelectors = {
    button: document.getElementById("btn"),
    input: document.getElementById(`#input`),
    box: document.getElementById("big-black-box"),
};

DOMSelectors.box.insertAdjacentElement("beforebegin", `<h1>We are an H1</h1>` 
)
