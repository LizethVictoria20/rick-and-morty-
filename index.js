fetch("https://rickandmortyapi.com/api/character/")
  .then(value => {
    return value.json();
  })
  .then(value => {
    console.log();
    value;
    return value.results;
  })
  .then(array => {
    const container = document.querySelector(".personajes");
    const elementos = array.slice(1, 4);
    console.log(elementos);
    elementos.map(myObj => {
      const containerImage = document.createElement("DIV");
      containerImage.className = "card";
      const imgTag = document.createElement("IMG");

      imgTag.setAttribute("src", myObj.image);
      containerImage.appendChild(imgTag);
      container.appendChild(containerImage);

      const containerInfo = document.createElement("DIV");
      containerInfo.className = "card-body";
      const infoTag = document.createElement("H5");

      infoTag.innerText = myObj.name;
      containerInfo.appendChild(infoTag);
      containerImage.appendChild(containerInfo);

      const button = document.createElement("A");
      button.className = "button-card";
      button.innerText = "Ver más";
      containerInfo.appendChild(button);
    });
  });
