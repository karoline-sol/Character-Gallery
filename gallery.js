
function addCharacter(event) {
    event.preventDefault();

    const form = document.getElementById("characterForm");
    const name = form.querySelector('#name');
    const type = form.querySelector('#type');
    const description = form.querySelector('#description');
    const image = form.querySelector('#image');

    // if no name alert to fill name
    // if no type alert fo fill type
    // if no description alert to fill description
    // if no image alert to fill image
    
    let character = {
        name: name.value,
        type: type.value,
        description: description.value,
        image: image.value
    }

  
    // add the character to local storage list
    let characters = JSON.parse(localStorage.getItem("characters") || '[]');
    characters.push(character)
    //save to loacl storage
    localStorage.setItem('characters', JSON.stringify(characters));
    renderCharacters(characters);
    form.reset();
}

    //function to display character card
function renderCharacters(characters) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = "";
    characters.forEach((element) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${element.image}" alt="${element.name}" />
        <h3>${element.name}</h3>
        <p>${element.type}</p>
        <p>${element.description}</p>`;

        gallery.appendChild(card);
    });
}

// function to set the local storage dragon index from the characters array

document.addEventListener("DOMContentLoaded", () => {
  // onload of document load my characters from local Storage and render them

    if (!localStorage.getItem("characters")) {
        localStorage.setItem("characters", JSON.stringify([]))
    }
    let characters = JSON.parse(localStorage.getItem("characters") || '[]')

 
    renderCharacters(characters);
    
    // get form - add submit listener that calls add character
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addCharacter);

    // card class event listener taht calls function to set the selected character index
});



