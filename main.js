const divContainer = document.querySelector(".container");

const div = document.createElement("div");

setDefault();

function setDefault() {
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
