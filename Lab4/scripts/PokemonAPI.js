
// Returns a Promise which obtains the json file of the pokemon
// specified in the parameter.
function getJson(pokemonName="None") {

    const getJsonPromise = new Promise((resolve,reject)=>{

        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        xhr.onreadystatechange = ()=> {
            var DONE = 4;
            var OK = 200;
    
            if( xhr.readyState != DONE ) return;
            if( xhr.status === OK) resolve( xhr.responseText );
            else reject();
        }

        xhr.send(null);

    })

    return getJsonPromise;
}


// Recives the json text and the desired attributes.
// Returns a dictionary with the values of the desired attributes
// that came from the json.
function getAttributes(jsonText, attributes=[]){
    const json = JSON.parse(jsonText);
    let attributesValues = {};

    if( attributes.indexOf("weight") != -1){
        attributesValues["weight"] = json["weight"];
    }
        
        
    if( attributes.indexOf("abilitiesNames") != -1){
        const abilitiesNames = [];
        const abilitiesInfo = json["abilities"];
        abilitiesInfo.forEach( (abilityInformation)=> { abilitiesNames.push(abilityInformation.ability.name) });
        attributesValues["abilitiesNames"] = abilitiesNames;
    }


    if( attributes.indexOf("typesNames") != -1){
        const typesNames = [];
        const typesInfo = json["types"];
        typesInfo.forEach( (typeInformation)=> { typesNames.push(typeInformation.type.name) });
        attributesValues["typesNames"] = typesNames;
    }


    if( attributes.indexOf("imageUrl") != -1){
        const imageUrl = json.sprites.front_default;
        attributesValues["imageUrl"] = imageUrl;
    }
        
    console.log("Attributes Values:", attributesValues);
    return attributesValues;
}


// Calls the handler onGetAttriutesHandler when we have the values of the desired attributes in the dictionary
// attributesValues.
export function whenOnGetPokemonAttributes(pokemonName="None", attributes=["abilitiesNames", "weight"], onGetAttributesHandler, errorHandler) {
    
    const getJsonPromise = getJson( pokemonName );
    getJsonPromise.then( (jsonText) => {
        
        const attributesValues = getAttributes(jsonText, attributes)
        onGetAttributesHandler(pokemonName, attributesValues);

    }, errorHandler );
    
}