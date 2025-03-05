// we are going to make a request to the pokemon api and generate a new pokemon each request.

// This function make a api request the the endpoint specifed and returns that data.

const button = document.querySelector("button");
const pokemon = document.querySelector("img");

button.addEventListener("click", async () => {
  const value = await apiRequest();
  console.log(value);
  pokemon.src = value;
});

const randomize = () => {
  return Math.floor(Math.random() * 151 + 1);
};

async function apiRequest() {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    return data.sprites.front_shiny;
  } catch (error) {
    console.error(error);
  }
}
