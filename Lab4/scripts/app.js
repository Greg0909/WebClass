import {whenOnGetPokemonAttributes} from './PokemonAPI.js';
import {addCard, showAlert, isRepeated} from './CardAndAlert.js';


// The passed Handler (addCard) will recive the pokemon name and the dicctionary attributesValues which
// contains the values of the asked attributes like weight or abilitiesNames.
whenOnGetPokemonAttributes("ditto", ["abilitiesNames", "weight", "typesNames", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("squirtle", ["abilitiesNames", "weight", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("charmander", ["abilitiesNames", "weight", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("charizard", ["abilitiesNames", "weight", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("pikachu", ["abilitiesNames", "weight", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("raichu", ["abilitiesNames", "weight", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("bulbasaur", ["abilitiesNames", "weight", "imageUrl"], addCard);
// whenOnGetPokemonAttributes("arceus", ["abilitiesNames", "weight", "imageUrl"], addCard);



document.getElementById("pokemon-name-form").onsubmit = (e) => {
    e.preventDefault();
    const pokemonName = e.target.querySelector("#pokemonNameField").value;

    if(!pokemonName){ 
        showAlert("emptyName");
        return
    };

    // Checks for repeated pokemons
    if( isRepeated(pokemonName) ){
        showAlert("repeated");
        return
    }

    // Dispose previous alerts
    var alertNode = document.querySelector('.alert');
    if(alertNode){
        document.querySelector(".alert button").click();
    }
    

    // The passed Handler (addCard) will recive the pokemon name and the dicctionary attributesValues which
    // contains the values of the asked attributes like weight or abilitiesNames.
    whenOnGetPokemonAttributes(pokemonName.toLowerCase(), ["abilitiesNames", "weight", "typesNames", "imageUrl"], addCard, showAlert);
}