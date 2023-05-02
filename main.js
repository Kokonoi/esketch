const divContainer = document.querySelector(".container");

const div = document.createElement("div");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", () => {
    div.setAttribute("style", "background-color: black");
  });
  divContainer.appendChild(div);
}
