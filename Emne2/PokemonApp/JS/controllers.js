
function catchPokemon(item,trainer){
    //console.log(item,trainer);
    players[trainer].playerPokemons.push(item)
    console.log(players[trainer].playerPokemons);
    caughtPokemonView(trainer);

}