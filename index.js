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
  card: document.querySelector(".card"),
  input1: document.querySelector("input[name='FullName']"),
  input2: document.querySelector("input[name='Image']"),
  input3: document.querySelector("input[name='Occupation']"),
};

/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>` )
 */
DOMSelectors.button.addEventListener("click", function () {
  let input1Value = DOMSelectors.input1.value;
  let input2Value = DOMSelectors.input2.value;
  let input3Value = DOMSelectors.input3.value;

  if (input1Value && input2Value && input3Value) {
    const cardInfo = document.createElement("div");
    cardInfo.insertAdjacentHTML(
      "afterbegin",
      `<p>${input1Value}</p><p>${input2Value}</p><p>${input3Value}</p>`
    );
    DOMSelectors.card.appendChild(cardInfo);

    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
  }
});

DOMSelectors.button.addEventListener(
  "click",
  () => {
    DOMSelectors.getElementById("card").visibility = visible;
  },
  false
);
