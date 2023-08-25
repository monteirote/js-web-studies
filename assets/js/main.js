function convertPokemonToLi(pokemon, n) {
    return `
        <li class="pokemon">
          <span class="number">${ n }</span>
          <span class="name">${ pokemon.name }</span>

          <div class="detail">
             <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
             </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ n }.svg" alt="${ pokemon.name }">
          </div>
        </li>`
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons) => {
    const listItems = [];

    pokemons.map();

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon));
    }
    // pokemonList.innerHTML += convertPokemonToLi(pokemon, i + 1);
})