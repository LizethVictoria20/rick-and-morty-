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

    const random1 = Math.floor(Math.random() * array.length);
    const random2 = Math.floor(Math.random() * array.length);
    const random3 = Math.floor(Math.random() * array.length);

    const elemento1 = array[random1];
    const elemento2 = array[random2];
    const elemento3 = array[random3];

    const todosLosElementos = [elemento1, elemento2, elemento3];

    todosLosElementos.map(myObj => {
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
    });
  });
