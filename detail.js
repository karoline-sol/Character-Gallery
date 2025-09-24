// Get elements
const bagList = document.getElementById("baglist");
const form = document.querySelector(".itemdetail");

// Load characters and selected one
let characters = JSON.parse(localStorage.getItem("characters")) || [];
let selectedIndex = localStorage.getItem("selectedCharacter");

if (selectedIndex !== null && characters[selectedIndex]) {
  const char = characters[selectedIndex];
  // Show character info
  document.querySelector(".imgblock").innerHTML = `
    <div class="card">
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>${char.description}</p>
    </div>
  `;
}

function updateBag () {
  if (baglist.children.length === 0) {
    const li = document.createElement("li");
    
    baglist.appendChild(li);
    }
}

// Handle adding item to bag
form.addEventListener("submit", (e) => {
  e.preventDefault();


  const type = form.itemType.value;
  const name = form.itemName.value;

  const li = document.createElement("li");
  li.textContent = `${type}: ${name}`;

  
  baglist.appendChild(li);

  form.reset();
});

updateBag();