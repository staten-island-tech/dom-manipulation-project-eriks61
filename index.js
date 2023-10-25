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
    card: document.getElementsByClassName("card"),
    input1: document.getElementsByName("FirstName"),
    input2: document.getElementsByName("LastName"),
    input3: document.getElementsByName("Occupation"),
  };

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>` )
 */
DOMSelectors.button.addEventListener("click", function(){
  let input1 = DOMSelectors.input1.value;
  DOMSelectors.card.insertAdjacentHTML("afterbegin",`<p>${input1}</p>`);
  DOMSelectors.input1.value = "";
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.card.insertAdjacentHTML("afterbegin", `<p>${input2}</p>`)
  DOMSelectors.input2.value = "";
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.card.insertAdjacentHTML("afterbegin", `<p>${input3}</p>`)
  DOMSelectors.input3.value = "";
});
