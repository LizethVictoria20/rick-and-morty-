const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const personajeID = "https://rickandmortyapi.com/api/character/" + id;

fetch(personajeID)
  .then(value => {
    return value.json();
  })
  .then(obj => {
    const container = document.querySelector(".container");
    const row = document.createElement("DIV");
    row.className = "row";
    container.appendChild(row);

    const containerImagen = document.createElement("IMG");
    containerImagen.className = "personaje col-sm-4";
    containerImagen.setAttribute("src", obj.image);

    const description = document.createElement("p");
    description.className = "description col-sm-4 col-md-4";
    description.innerHTML = `
      <strong>Name : </strong>${obj.name}</br>
      <strong>Status : </strong>${obj.status}</br>
      <strong>Gender : </strong>${obj.gender}</br>
      <strong>Origin : </strong>${obj.origin.name}</br>
      <strong>Location : </strong>${obj.location.name}
    `;

    row.appendChild(containerImagen);
    row.appendChild(description);
  });
