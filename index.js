const DOMSelectors = {
  button: document.getElementById("btn"),
  input1: document.querySelector("input[name='FullName']"),
  input2: document.querySelector("input[name='Image']"),
  input3: document.querySelector("input[name='Occupation']"),
  gallery: document.getElementById("card-container"),
  emptyCard: document.getElementById("empty-card"),
};

let cardvisibility = false;

DOMSelectors.button.addEventListener("click", function createcard() {
  const input1Value = DOMSelectors.input1.value;
  const input2Value = DOMSelectors.input2.value;
  const input3Value = DOMSelectors.input3.value;

  if (input1Value && input2Value && input3Value) {
    const card = document.createElement("div");
    card.className = "boxy";
    card.innerHTML = `
      <div class="card-image"></div>
      <h2 class="card-name">${input1Value}</h2>
      <h3 class="card-occupation">${input3Value}</h3>
      <button class="deletebtn">Delete</button>
    `;

    DOMSelectors.gallery.insertAdjacentElement("afterbegin", card);

    card.querySelector(".card-image").style.backgroundImage = `url('${input2Value}')`

    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";

   

    const deleteButton = card.querySelector(".deletebtn");
    deleteButton.addEventListener("click", function(){
      card.remove();

      if (DOMSelectors.gallery.children.length === 0) {
        DOMSelectors.emptyCard.style.display = "none";
        cardvisibility = false;
      }
    });
    if (!cardvisibility) {
      DOMSelectors.emptyCard.style.display = "flex";
      cardvisibility = true;
    }
  }
});


//delete with event listener with event.target.parentElement.possibly parent element again
