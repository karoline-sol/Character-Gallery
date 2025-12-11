// Get form and gallery div
const form = document.getElementById("characterForm");
const gallery = document.getElementById("gallery");

// Load characters from localStorage
let characters = JSON.parse(localStorage.getItem("characters")) || [];

// Function to display characters
function displayCharacters() {
  gallery.innerHTML = ""; // clear gallery

  characters.forEach((char, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Correct delete-btn class
    card.innerHTML = `
      <button class="delete-btn" data-index="${index}">X</button>
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.type} - ${char.description}</p>
    `;

    // Clicking the card opens detail page
    card.addEventListener("click", () => {
      localStorage.setItem("selectedCharacter", index);
      window.location.href = "detail.html";
    });

    // Select the delete button properly
    const deleteBtn = card.querySelector(".delete-btn");

    // Add delete behavior
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      characters.splice(index, 1);
      localStorage.setItem("characters", JSON.stringify(characters));
      displayCharacters();
    });

    gallery.appendChild(card);
  });
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newChar = {
    type: form.type.value,
    name: form.name.value,
    description: form.description.value,
    image: form.image.value
  };

  characters.push(newChar);
  localStorage.setItem("characters", JSON.stringify(characters));
  displayCharacters();
  form.reset();
});

// Initial load
displayCharacters();

