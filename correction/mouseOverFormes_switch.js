/*  délégation d’événement
avec un switch
*/

container.addEventListener("mouseover", (e) => {
    if (!e.target.children[0] || e.target.children[0].tagName !== "svg") return;
    const type = e.target.children[0].dataset.shape;
    switch (type) {
      case "circle":
        e.target.innerHTML = square;
        break;
      case "triangle":
        e.target.innerHTML = circle;
        break;
      case "square":
        e.target.innerHTML = triangle;
        break;
    }
  });

  