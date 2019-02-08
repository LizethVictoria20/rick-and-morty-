const url = new URLSearchParams(window.location.search);
const get = url.get("id");
console.log(get);
const fetchUrl = "https://rickandmortyapi.com/api/character/" + get;

fetch(fetchUrl)
  .then(value => {
    return value.json();
  })
  .then(value => {
    console.log(value);
  });
