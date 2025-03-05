const endpoint = "https://api.github.com/user";

// This function make a api request the the endpoint specifed and returns that data.
async function apiRequest() {
  try {
    const request = await fetch(endpoint);
    const data = await request.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// function test (){
//     const request = await fetch(endpoint);
// }

apiRequest();
