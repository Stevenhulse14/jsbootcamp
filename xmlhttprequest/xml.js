const request = new XMLHttpRequest();

console.log(request);

request.open("GET", "https://api.github.com/users");

request.send();
