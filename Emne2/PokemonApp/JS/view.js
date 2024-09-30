let pokemon;
let playerIndex
function updateView(){
     pokemon = showRandomPokemon()
     playerIndex = showRandomTrainer()
    //console.log(pokemon);
    app.innerHTML= `
    
        <div class="container">
            <div class="pokemon">
                <img src="${pokemon.image}" alt="">
                <h3>${pokemon.pokemonName}</h3>
                <h3>Level: ${pokemon.level}</h3>
            </div>
            <div class="player">
                <img src="${players[playerIndex].playerImage}" alt="">
                <h2>${players[playerIndex].playerName}</h2>
            </div>
            <div class="buttons">
                <button onclick="catchPokemon(pokemon,playerIndex)">Fang</button>
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>
            </div>
        </div>
    
    `
};
updateView();

function caughtPokemonView(trainer){
    let caughtPokemons = players[trainer].playerPokemons
    console.log(caughtPokemons);
    app.innerHTML=`
        <div class="caughtContainer">
    <h1>Du fanget ${caughtPokemons[caughtPokemons.length-1].pokemonName}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>
          </div>
  </div>
    
    `
}

function showRandomPokemon(){
    let randomindex= Math.floor(Math.random()*pokemons.length)
    let randomPokemon = pokemons[randomindex]
    //console.log(randomPokemon);
    return randomPokemon;
}
function showRandomTrainer(){
    let randomindex= Math.floor(Math.random()*players.length)
    
    //console.log(randomPokemon);
    return randomindex;
}