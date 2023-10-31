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
  gallery: document.getElementById("boxy"),
};

DOMSelectors.button.addEventListener("click", function () {
 
});

DOMSelectors.button.addEventListener("click", function createcard() {
  DOMSelectors.gallery.insertAdjacentHTML(
    "afterbegin",
    ` <div class="flex-container">
    <div id="boxy" class="boxy">
    <h2 class="card-name>${input1Value}</h2>
    <h3 class="card-img>${input2Value}</h3>
    <h3 class="card-occupation>${input3Value}</h3>
    </div>
    </div>
 `
  );
  const input1Value = DOMSelectors.input1.value;
  const input2Value = DOMSelectors.input2.value;
  const input3Value = DOMSelectors.input3.value;

  /*   if (input1Value && input2Value && input3Value) {
    const cardInfo = document.createElement("div");
    cardInfo.insertAdjacentHTML(
      "afterbegin",
      `<p>${input1Value}</p><p>${input2Value}</p><p>${input3Value}</p>`
    ); */ /* 
    DOMSelectors.card.appendChild(cardInfo);
 */ DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
});
