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

    let random = [];
    for (let i = 0; i < 3; i++) {
      random = [...random, array[Math.round(Math.random() * array.length)]];
    }

    random.map(myObj => {
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
