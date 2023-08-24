offset = 0;
limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${ offset }&limit=${ limit }`;

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
// pokemonList.innerHTML += `teste`;

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon, i + 1);
        }
    })
    .catch((error) => console.log(error));