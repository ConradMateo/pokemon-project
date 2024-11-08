let pokedexData;
let pokemonImages = [];
let pokemonList = [];
let currentPokemon = 0;

function preload() {
  // Load the Pokedex JSON data from the URL
  pokedexData = loadJSON('pokedex.json');
}

function setup() {
  createCanvas(800, 600);
  textSize(14);
  textAlign(LEFT, TOP);
  
  // Parse JSON data into an array of Pokémon objects
  let pokeArray = pokedexData.pokemon;
  for (let i = 0; i < pokeArray.length; i++) {
    let poke = pokeArray[i];
    pokemonList.push(poke);
    pokemonImages.push(loadImage(poke.img));  // Load images for each Pokémon
  }
  
  // Initial display of the first Pokémon
  displayPokemon(currentPokemon);
}

function draw() {
  background(255);
  
  // Display the current Pokémon's data
  displayPokemon(currentPokemon);
}

function displayPokemon(index) {
  let poke = pokemonList[index];
  let img = pokemonImages[index];
  
  // Display Pokémon image
  image(img, 20, 40, 150, 150);
  
  // Display Pokémon name
  fill(0);
  textSize(20);
  text(poke.name, 200, 40);
  
  // Display Pokémon number (ID)
  textSize(16);
  text("ID: #" + poke.num, 200, 80);
  
  // Display Pokémon type(s)
  text("Type: " + poke.type.join(", "), 200, 100);
  
  // Display navigation info (previous and next buttons)
  fill(0, 0, 255);
  textSize(16);
  text("< Prev", 20, height - 40);
  text("Next >", width - 100, height - 40);
}

function mousePressed() {
  // Check if the user clicked on the "Prev" button
  if (mouseX > 20 && mouseX < 100 && mouseY > height - 50 && mouseY < height - 30) {
    currentPokemon = (currentPokemon - 1 + pokemonList.length) % pokemonList.length; // Go to previous Pokémon
  }
  
  // Check if the user clicked on the "Next" button
  if (mouseX > width - 100 && mouseX < width - 20 && mouseY > height - 50 && mouseY < height - 30) {
    currentPokemon = (currentPokemon + 1) % pokemonList.length; // Go to next Pokémon
  }
}
