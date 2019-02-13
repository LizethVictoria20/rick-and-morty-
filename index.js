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
    const container = document.querySelector(".container");
    const row = document.createElement("DIV");
    row.className = "row";
    container.appendChild(row);

    let random = [];
    for (let i = 0; i < 3; i++) {
      random = [...random, array[Math.round(Math.random() * array.length)]];
    }

    random.map(myObj => {
      const containerImage = document.createElement("DIV");
      containerImage.className = "card col-lg-3 col-md-4";
      const imgTag = document.createElement("IMG");

      imgTag.setAttribute("src", myObj.image);
      containerImage.appendChild(imgTag);
      row.appendChild(containerImage);

      const containerInfo = document.createElement("DIV");
      containerInfo.className = "card-body";
      const infoTag = document.createElement("H5");

      infoTag.innerText = myObj.name;
      containerInfo.appendChild(infoTag);
      containerImage.appendChild(containerInfo);
    });
  });
