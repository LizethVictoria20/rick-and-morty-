const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const personajeID = "https://rickandmortyapi.com/api/character/" + id;

fetch(personajeID)
  .then(value => {
    return value.json();
  })
  .then(obj => {
    console.log(obj);
    const container = document.querySelector(".jumbotron");

    const containerImagen = document.createElement("IMG");
    containerImagen.className = "personaje";
    containerImagen.setAttribute("src", obj.image);

    const description = document.createElement("p");
    description.className = "description";
    description.innerHTML = `
      <strong>Name : </strong>${obj.name}</br>
      <strong>Status : </strong>${obj.status}</br>
      <strong>Gender : </strong>${obj.gender}</br>
      <strong>Origin : </strong>${obj.origin.name}</br>
      <strong>Location : </strong>${obj.location.name}
    `;

    container.appendChild(containerImagen);
    container.appendChild(description);
  });
