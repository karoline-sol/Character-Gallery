
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
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.type} - ${char.description}</p>
    `;
    // When clicked, go to detail.html with index
    card.addEventListener("click", () => {
      localStorage.setItem("selectedCharacter", index);
      window.location.href = "detail.html";
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
