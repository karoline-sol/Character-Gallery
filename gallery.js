class Character {
  constructor(name, type, image_src, description, bag = []) {
    this.name = name
    this.type = type
    this.image_src = image_src
    this.description = description
    this.bag = bag
  }

}


function addCharacter(event) {
  event.preventDefault();

  const form = document.getElementById("characterForm");
  const name = form.querySelector("#name");
  const type = form.querySelector("#type");
  const description = form.querySelector("#description");
  const image = form.querySelector("#image");

  // if no name alert to fill name
  // if no type alert fo fill type
  // if no description alert to fill description
  // if no image alert to fill image

  let character = new Character(
    name.value,
    type.value,
    image.value,
    description.value
  );

  let storedCharacters = JSON.parse(localStorage.getItem("characters") || "[]");
  // add the character to local storage list

  storedCharacters.push(character.valueForStorage);
  //save to local storage
  localStorage.setItem("characters", JSON.stringify(storedCharacters));

  const gallery = document.getElementById("gallery");
  character.buildCard(gallery);
  form.reset();
}

buildCard(parentElement) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = this.name;

    card.innerHTML = `
    <img src="${this.image_src}" alt="${this.name}" />
    <h3>${this.name}</h3>
    <p>${this.type}</p>
    <p>${this.description}</p>`;

    card.addEventListener("click", (event) => {
      let id = event.currentTarget.id;
      let characters = JSON.parse(localStorage.getItem("characters") || "[]");
      let index = characters.findIndex((character) => character.name == id);
      localStorage.setItem("currentCharacterIndex", index);
      window.location.href = `detail.html`;
    });

    parentElement.appendChild(card);
  }


// function to set the local storage dragon index from the characters array

document.addEventListener("DOMContentLoaded", () => {
  // onload of document load my characters from local Storage and render them

  if (!localStorage.getItem("characters")) {
    localStorage.setItem("characters", "[]");
  }
  let characters = JSON.parse(localStorage.getItem("characters") || "[]");


  const gallery = document.getElementById("gallery");
  characters.forEach((character) => {
    let charKlass = new Character(
      character.name,
      character.type,
      character.image_src,
      character.description,
      character.bag || []
    );
    
    charKlass.buildCard(gallery);
  });

  // get form - add listener that calls add character
  const addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", addCharacter);
});
