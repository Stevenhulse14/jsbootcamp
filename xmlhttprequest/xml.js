// const request = new XMLHttpRequest();

// console.log(request);

// request.open("GET", "https://api.github.com/users");

// request.send();
// console.log(JSON.parse(request.re));
// console.log(request.responseText);

// const request = new XMLHttpRequest();

// // The third parameter 'false' makes the request synchronous
// request.open("GET", "https://api.github.com/users", false);

// // Send the request
// request.send();

xhrGet("https://api.github.com/users")
  .then((responseText) => {
    // The raw response text:
    console.log("Response text:", responseText);

    // Optionally parse if it’s JSON:
    const data = JSON.parse(responseText);
    console.log("Parsed data:", data);
  })
  .catch((error) => {
    console.error("Failed:", error);
  });
