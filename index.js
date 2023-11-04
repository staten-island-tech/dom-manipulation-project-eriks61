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
  input1: document.querySelector("input[name='FullName']"),
  input2: document.querySelector("input[name='Image']"),
  input3: document.querySelector("input[name='Occupation']"),
  gallery: document.getElementById("card-container"),
  emptyCard: document.getElementById("empty-card"),
};


let isInitialCardVisible = false; 


DOMSelectors.button.addEventListener("click", function createcard() {
  const input1Value = DOMSelectors.input1.value;
  const input2Value = DOMSelectors.input2.value;
  const input3Value = DOMSelectors.input3.value;


  if (input1Value && input2Value && input3Value) {
    const card = document.createElement("div");
    card.className = "boxy";
    card.innerHTML = `
      <h2 class="card-name">${input1Value}</h2>
      <h3 class="card-img">${input2Value}</h3>
      <h3 class="card-occupation">${input3Value}</h3>
    `;


    DOMSelectors.gallery.insertAdjacentElement("afterbegin", card);


    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";


  
    if (!isInitialCardVisible) {
      DOMSelectors.emptyCard.style.display = "flex";
      isInitialCardVisible = true;
    }
  }
});




