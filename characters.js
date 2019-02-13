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
    const container = document.querySelector(".container"); //Classe en donde se crearan todos los elementos
    const row = document.createElement("DIV");
    row.className = "row";
    container.appendChild(row);
    array.map(myObj => {
      const containerImage = document.createElement("DIV"); //Elemento que tomara container
      containerImage.className = "card"; //Clase que toma el elemento
      const imgTag = document.createElement("IMG"); //Elemento que se crea dentro del div

      imgTag.setAttribute("src", myObj.image); //Toma la info del api y la pone dentro del elemento img
      containerImage.appendChild(imgTag); //Se le agrega esa etiqueta al nodo de DIV
      row.appendChild(containerImage); //Todo lo anterior se le agrega al container .personajes

      const containerInfo = document.createElement("DIV");
      containerInfo.className = "card-body";
      const infoTag = document.createElement("H5");

      infoTag.innerText = myObj.name;
      containerInfo.appendChild(infoTag);
      containerImage.appendChild(containerInfo);

      const URL = "description.html?id=";

      const description = document.createElement("A");
      description.setAttribute("href", URL + myObj.id);
      description.className = "button-card";
      description.innerText = "Description";
      containerInfo.appendChild(description);
    });
  });
