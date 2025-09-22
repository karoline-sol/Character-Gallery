// Find elements
function findElements() { 
  const dragonItems = document.getElementById("dragonItems");
  const itemType = document.getElementById("itemType");
  const itemName = document.getElementById("itemName");
  const addItemBtn = document.getElementById("addItem");

  let bag = {
    item: itemType.value;
    Name: itemName.value;
  };
  
  // Load existing items from localStorage
  let items = JSON.parse(localStorage.getItem("bag")) || [];

  // Function to display items in bag
  function displayItems() {
    dragonItems.innerHTML = "";
    if (items.length === 0) {
      dragonItems.innerHTML = "<p>No items in bag</p>";
      return;
    }
    const ul = document.createElement("ul");
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.type}: ${item.name}`;
      ul.appendChild(li);
    });
    bag.appendChild(ul);
  }

  // Add item on click
  addItemBtn.addEventListener("click", () => {
    const type = itemType.value;
    const name = itemName.value.trim();

    if (!type || !name) {
      alert("Please select a type and enter a name.");
      return;
    }

    // Add new item
    items.push(({ type, name}));

    // Save to localStorage
    localStorage.setItem("bag", JSON.stringify(items));

    // Clear input fields
    itemType.value = "";
    itemName.value = "";

    // Re-render items
    displayItems();
  });

  // dom content loaded listener like in gallery
document.addEventListener("DOMContentLoaded", () => {
  // onload of document load my characters from local Storage and render them

    if (!localStorage.getItem("bag")) {
        localStorage.setItem("bag", JSON.stringify([]))
    }
    let bag = JSON.parse(localStorage.getItem("bag") || '[]')

  // Initial display on page load
  displayItems();
});

};


// inside it's callback function - need to select the character based on the local storage selected character index

