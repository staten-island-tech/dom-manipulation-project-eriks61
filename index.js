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
      <h2 class="card-name">${input1Value}</h2>
      <h3 class="card-img">${input2Value}</h3>
      <h3 class="card-occupation">${input3Value}</h3>
      <h5 class="deletebtn" id="btn">Delete<h5>
    `;

    DOMSelectors.gallery.insertAdjacentElement("afterbegin", card);

    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";

    if (!cardvisibility) {
      DOMSelectors.emptyCard.style.display = "flex";
      cardvisibility = true;
    }
  }
});


//delete with event listener with event.target.parentElement.possibly parent element again
//make new button have id of btn