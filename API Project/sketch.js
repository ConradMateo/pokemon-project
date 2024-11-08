let pokedexData;
//let pokemonImages = [];
let pokemonList = [];
let currentPokemon = 0;
let img;
let img1;
let img2;
let img3;
let img4;

function preload() {
  pokedexData = loadJSON('pokedex.json');
  img = loadImage('poke.png');
  img1 = loadImage('Poke_Ball.png');
  img2 = loadImage('char-pikachu.png');
  img3 = loadImage('water.png');
  img4 = loadImage('pokemon-cards.png');
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
   // pokemonImages.push(loadImage(poke.img));  // Load images for each Pokémon
  

  }
  // Diplays the first pokemon
  displayPokemon(currentPokemon);
}

function draw() {
  background(100, 400, 100, 300);
  image(img4, 0.1, 0.1, 800, 800);
  image(img3, 202, 120, 370, 450);
  image(img, 300, 0.1, 150, 120);
  image(img1, 20, 30, 100, 100);
  image(img2, 500, 450, 200, 200);
  
  // Display the current Pokémon's data
  displayPokemon(currentPokemon);

}

function displayPokemon(index) {
  let poke = pokemonList[index];
 // let img = pokemonImages[index];
  
  // Display Pokémon image
 // image(img, 20, 40, 150, 150);
  
  // Display Pokémon name
  fill(0);
  textSize(20);
  text(poke.name, 250, 190);
  
  // Display Pokémon number (ID)
  textSize(16);
  text("ID: #" + poke.num, 250, 220);
  
  // Display Pokémon type(s)
  text("Type: " + poke.type.join(", "), 250, 245);
  
  // Display navigation info
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
