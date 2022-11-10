const container = document.querySelector("main");

const circle = `<svg viewBox="0 0 100 100" data-shape="circle">
<circle cx="50" cy="50" r="50"/>
</svg>`;

const triangle = ` <svg viewBox="0 0 100 100" data-shape="triangle">
<polygon points="0,100 100,100 50,0"></polygon>
</svg>`;

const square = `<svg viewBox="0 0 100 100" data-shape="square">
<polygon points="0,0 0,100 100,100, 100,0"></polygon>
</svg>`;

const makeGrid = (r, c) => {
  container.style.setProperty("--grid-rows", r);
  container.style.setProperty("--grid-cols", c);
  for (c = 0; c < r * r; c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

const addShapes = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const shape = Math.floor(Math.random() * 3);

    switch (shape) {
      case 0:
        container.children[i].insertAdjacentHTML("afterbegin", circle);
        break;
      case 1:
        container.children[i].insertAdjacentHTML("afterbegin", triangle);
        break;
      case 2:
        container.children[i].insertAdjacentHTML("afterbegin", square);
        break;
    }
  }
};

const initGrid = (gridSize) => {
  makeGrid(gridSize, gridSize);
  addShapes(gridSize);
};

initGrid(Math.floor(Math.random() * 24));

/**
 * Si c’est un cercle, transformez-la en carré
 * - Si c’est un triangle, transformez-la en cercle
 * - Si c’est un carré, transformez-la en triangle.
 */
    // eventlistener main
    container.addEventListener("mouseover", (e) => {
        //if the target is a svg
      console.log(e.target);
        if (e.target.nodeName === "svg"){
          //remove the svg
            e.target.remove();
            //switch the shape with the const
            switch (e.target.dataset.shape) {
                case "circle":
                    e.target.insertAdjacentHTML("afterbegin", square);
                    break;
                case "triangle":
                    e.target.insertAdjacentHTML("afterbegin", circle);
                    break;
                case "square":
                    e.target.insertAdjacentHTML("afterbegin", triangle);
                    break;
            }
        }
    });







