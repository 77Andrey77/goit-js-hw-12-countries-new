import "./css/common.css";
import pokCard from '../src/templates/pokemon-card.hbs'

const jsContainer= document.querySelector('.js-card-container')

fetch("https://pokeapi.co/api/v2/pokemon/2")
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        const markup = pokCard(pokemon);
        // console.log(markup);

        jsContainer.innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    });

    