import pokemonCardTpl from './templates/pokemon-card.hbs';

const cardContainer = document.querySelector('.js-card-container');

fetch('https://pokeapi.co/api/v2/pokemon/35/')
.then(Response => {return Response.json()})
.then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    cardContainer.innerHTML = markup;

})
.catch(error => {console.log(error)});




function pokemonCardTpl(pokemon) {
    pokemon.map({name, ability, weight, height}) => {
        return `<div class="card">
        <div class="card-img-top">
          <img src="${sprites.front_default}" alt="${name}">
        </div>
        <div class="card-body">
          <h2 class="card-title">Имя: ${name}</h2>
          <p class="card-text">Вес: ${weight}</p>
          <p class="card-text">Рост: ${height}</p>
      
          <p class="card-text"><b>Умения</b></p>
          <ul class="list-group"></ul>
          {{#each abilities}}
            <li class="list-group-item">${ability.name}</li>
          {{/each}}
          </ul>
        </div>
      </div>`
    }
}

