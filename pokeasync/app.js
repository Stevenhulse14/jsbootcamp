// we are going to make a request to the pokemon api and generate a new pokemon each request.

// This function make a api request the the endpoint specifed and returns that data.

let pokemon_team_state = [];

const button = document.querySelector("button");
const rock = document.querySelector("#stone");
const pokemon = document.querySelector("img");
const catchbtn = document.querySelector("#catch");
const team = document.querySelector(".teamcontainer");

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

catchbtn.addEventListener("click", () => {
  pokemon_team_state.push(pokemon.src);
  addPokemonDom();
  console.log(pokemon_team_state);
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

function addPokemonDom() {
  team.innerHTML = "";
  pokemon_team_state.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    console.log(src);
    team.append(img);
  });
}

// tools helper function
const randomize = () => {
  return Math.floor(Math.random() * 900 + 1);
};

// assignment
// create a constraint that only allows 6 pokemon in the team
// add styling that wraps the element to the new line.
// Create a container for your opponent
// every pokemon you do not select your opponent gets.
// render your opponents team right next to your team.
