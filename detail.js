// add item function click handler

function addItemToCurrentCharacterBagAndSaveToLocalStorage(charKlass, currentIndex, characters) {
  let form = document.querySelector('.itemdetail');
  let itemName = form.querySelector('#itemName').value;
  let itemType = form.querySelector('#itemType').value;

  charKlass.addItem({itemName, itemType});

  let toStore = charKlass.valueForStorage;
  characters[currentIndex] = toStore;
  localStorage.setItem("characters", JSON.stringify(characters));
  renderBagList(charKlass);
  form.reset();
}


function renderBagList(charKlass) {
  let bagList = document.getElementById('bag-list');
  bagList.innerHTML = ""
  charKlass.bag.forEach((item) => {
    console.log(item);
    // build the li 
    const li = document.createElement('li');
    li.innerHTML = `ItemName: ${item.itemName} - ItemType: ${item.itemType}`;

    bagList.appendChild(li);
  })
}

// on document load 
document.addEventListener('DOMContentLoaded', () => {
  // find the current character
  let currentIndex = localStorage.getItem("currentCharacterIndex")
  let characters = JSON.parse(localStorage.getItem("characters") || "[]");
  if (!currentIndex || !characters || currentIndex < 0) {
    window.location.href = "index.html"
    return;
  } 
    
  

  let currentCharacter = characters[currentIndex];

  // add character card to detail page 
  // using a character class instance 
  const charKlass = new Character(
    currentCharacter.name, 
    currentCharacter.type,
    currentCharacter.image_src,
    currentCharacter.description,
    currentCharacter.bag || []
  )

  let parent = document.querySelector('.imgblock');
  charKlass.buildCard(parent);
  renderBagList(charKlass);

  // on click for the bag items 
  let addBtn = document.getElementById('addItem');
  addBtn.addEventListener('click', () => {
    addItemToCurrentCharacterBagAndSaveToLocalStorage(charKlass, currentIndex, characters);
  })
});