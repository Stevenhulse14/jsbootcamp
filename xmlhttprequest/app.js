// JSON - JavaScript Object Notation
// Stringify - turns a javascript object into a JSON string

let animalsJSON = `[
    { "eng": "rat", "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    { "eng": "cow", "chi": "niu", "pin": "niu&#769;", "year": 2021 },
    { "eng": "tiger", "chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    { "eng": "rabbit", "chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    { "eng": "dragon", "chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    { "eng": "snake", "chi": "she", "pin": "she&#769;", "year": 2025 },
    { "eng": "horse", "chi": "ma", "pin": "ma&#780;", "year": 2026 },
    { "eng": "goat", "chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    { "eng": "monkey", "chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    { "eng": "chicken", "chi": "ji", "pin": "ji&#772;", "year": 2029 },
    { "eng": "dog", "chi": "gou", "pin": "gou&#780;", "year": 2030 },
    { "eng": "pig", "chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    ]`;

// access the 120th index of the JSON string
//console.log(animalsJSON[120]);

// parse the JSON string into a JSON object
let animals = JSON.parse(animalsJSON);

// access the 2nd index of the JSON object
//console.log(animals[2]);

// stringify the JSON object into a JSON string
let newAnimal = JSON.stringify(animals);

//console.log(newAnimal);

// 1. transform that data into an object.
let animalsJSONObj = `{
    "rat": { "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    "cow": {"chi": "niu", "pin": "niu&#769;", "year": 2021 },
    "tiger": {"chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    "rabbit": {"chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    "dragon": {"chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    "snake": {"chi": "she", "pin": "she&#769;", "year": 2025 },
    "horse": {"chi": "ma", "pin": "ma&#780;", "year": 2026 },
    "goat": {"chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    "monkey": {"chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    "chicken": {"chi": "ji", "pin": "ji&#772;", "year": 2029 },
    "dog": {"chi": "gou", "pin": "gou&#780;", "year": 2030 },
    "pig": {"chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    }`;

let newAnimalObj = JSON.parse(animalsJSONObj);
//console.log(newAnimalObj);
// 2. access the chicken element in the object and output the year.
//console.log(newAnimalObj.chicken.year);

// 3. loop over the obj and output every animal.
for (let animal in newAnimalObj) {
  console.log(animal);
}
