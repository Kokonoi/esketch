const divContainer = document.querySelector(".container");
const div = document.createElement("div");
const firstButton = document.querySelector(".btn1");
const secondButton = document.querySelector(".btn2");
const thirdButton = document.querySelector(".btn3");
const blackButton = document.querySelector(".btn4");
const rbgButton = document.querySelector(".btn5");
const clearButton = document.querySelector(".btn6");

setDefault();

function setDefault(color = "black") {
  // 16x16=265 => i must be defined this way so the squares take all the space
  divContainer.replaceChildren();
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("style", `background-color: white;`);
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", `background-color: ${color};`);
    });
    divContainer.appendChild(div);
  }
}

function setEight(color = "black") {
  divContainer.replaceChildren();
  for (let i = 0; i < 64; i++) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      "width:50px; height:50px; background-color: white;"
    );
    div.addEventListener("mouseover", () => {
      div.setAttribute(
        "style",
        `background-color: ${color}; width:50px; height:50px`
      );
    });
    divContainer.appendChild(div);
  }
}

function setThirtytwo(color = "black") {
  divContainer.replaceChildren();
  for (let i = 0; i < 1024; i++) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      "width:12.5px; height:12.5px; background-color: white;"
    );
    div.addEventListener("mouseover", () => {
      div.setAttribute(
        "style",
        `background-color: ${color};;width:12.5px; height:12.5px;`
      );
    });
    divContainer.appendChild(div);
  }
}

function setRGB() {
  let color = getRandomColor();
  return color;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function clearDivs() {
  let divs = document.querySelectorAll("#sketch > div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "white";
  }
}

firstButton.addEventListener("click", () => {
  setEight();
});

secondButton.addEventListener("click", () => {
  setDefault();
});

thirdButton.addEventListener("click", () => {
  setThirtytwo();
});

blackButton.addEventListener("click", () => {});

rbgButton.addEventListener("click", () => {
  setDefault(setRGB());
});

clearButton.addEventListener("click", () => {
  clearDivs();
});
