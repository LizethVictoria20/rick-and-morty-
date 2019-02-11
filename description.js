const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const personajeID = "https://rickandmortyapi.com/api/character/" + id;

fetch(personajeID)
  .then(value => {
    return value.json();
  })
  .then(obj => {
    console.log(obj);
  });
