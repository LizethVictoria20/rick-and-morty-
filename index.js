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
    });

    /*let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");
    let imagen3 = document.getElementById("imagen3");
    let imagen4 = document.getElementById("imagen4");

    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");
    let name3 = document.getElementById("name3");
    let name4 = document.getElementById("name4");

    imagen1.src = `${array[12].image}`;
    imagen2.src = `${array[13].image}`;
    imagen3.src = `${array[14].image}`;
    imagen4.src = `${array[15].image}`;

    name1.innerHTML = `${array[12].name}`;
    name2.innerHTML = `${array[13].name}`;
    name3.innerHTML = `${array[14].name}`;
    name4.innerHTML = `${array[15].name}`;*/
  });
