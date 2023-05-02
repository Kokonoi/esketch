const divContainer = document.querySelector(".container");
const div = document.createElement("div");
const firstButton = document.querySelector(".btn1");
const secondButton = document.querySelector(".btn2");
const thirdButton = document.querySelector(".btn3");
const blackButton = document.querySelector(".btn4");
const rbgButton = document.querySelector(".btn5");
const clearButton = document.querySelector(".btn6");

setDefault();

function setDefault() {
  // 16x16=265 => i must be defined this way so the squares take all the space
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "background-color: black");
    });
    divContainer.appendChild(div);
  }
}

function setSixteen() {
  for (let i = 0; i < 64; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "background-color: black");
    });
    divContainer.appendChild(div);
  }
}

function setThirtytwo() {
  for (let i = 0; i < 1024; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "background-color: black");
    });
    divContainer.appendChild(div);
  }
}
