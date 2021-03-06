const BASE = "https://pokeapi.co/api/v2/pokemon/";

function single(id) {
  return fetch(`${BASE}${id}/`)
    .then((response) => response.json())
    .then((data) => data);
}

function index() {
  return fetch(`${BASE}?offset=0&limit=898`)
    .then((response) => response.json())
    .then((data) =>
      data.results.map((p, i) => Object.assign({ id: i + 1 }, p))
    );
}

export { single, index };
