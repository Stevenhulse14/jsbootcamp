// we are going to make a request to the pokemon api and generate a new pokemon each request.

// This function make a api request the the endpoint specifed and returns that data.

const button = document.querySelector("button");
const rock = document.querySelector("#stone");
const pokemon = document.querySelector("img");

button.addEventListener("click", async () => {
  const value = await apiRequest();
  console.log(value);
  pokemon.src = value;
});

rock.addEventListener("click", async () => {
  const val = await apiRequest();
  console.log(val);
  pokemon.src = "";
});
// task create a event listener that grabs the rock !

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

const randomize = () => {
  return Math.floor(Math.random() * 900 + 1);
};
