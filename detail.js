// Get elements
const bagList = document.getElementById("bag");
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
  if (bag.children.length === 0) {
    const li = document.createElement("li");
    li.textConent = "No items in bag";
    bag.appendChild(li);
    }
}

// Handle adding item to bag
form.addEventListener("submit", (e) => {
  e.preventDefault();

if (bag.firstChild && bag.firstChild.textContent === "No items in bag") {
  bag.innerHTML = "";
}

  const type = form.itemType.value;
  const name = form.itemName.value;

  const li = document.createElement("li");
  li.textContent = `${type}: ${name}`;

  
  bag.appendChild(li);

  form.reset();
});

updateBag();