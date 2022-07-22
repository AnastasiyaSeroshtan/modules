// 1// const parent = document.querySelector("#parent");
// // const child = document.querySelector("#child");
// // const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", (event) => {
//     console.log("event.target: ", event.target);
//     console.log("event.currentTarget: ", event.currentTarget);
//   });

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }



function includes(array, value) {
  for (let i=0; i <= array.length; i+=1) {
    if(array[i] === value) {
      return true;
    }
    else {return false}
  }

  const array1 = includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
  console.log(array1);