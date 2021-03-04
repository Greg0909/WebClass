let pokemonNamesHistory = ["ditto"];

function getTextDecsriptionFromAttributes(attributesValues={}){
    let description = "";

    
    if(attributesValues["typesNames"]){
        description += `Type: ${attributesValues["typesNames"].join(', ')} <br/>`;
    }

    if(attributesValues["abilitiesNames"]){
        description += `Abilities: ${attributesValues["abilitiesNames"].join(', ')} <br/>`;
    }

    if(attributesValues["weight"]){
        description += `Weight: ${attributesValues["weight"]} <br/>`;
    }

    return description;
}



function onDelete(e){
    const parentCard = e.target.parentNode.parentNode;
    const pokemonNameInCard = e.target.parentNode.querySelector("h5").textContent;
    parentCard.parentNode.removeChild( parentCard );
    
    pokemonNamesHistory = pokemonNamesHistory.filter( (pokemonName) => (pokemonName != pokemonNameInCard.toLowerCase()) );
}


export function isRepeated(pokemonName){
    return pokemonNamesHistory.indexOf(pokemonName.toLowerCase()) != -1;
}

export const addCard = (pokemonName="None", attributesValues={}) => {

    // Creates the card div
    let divCard = document.createElement("div");
    divCard.classList.toggle("card");
    divCard.style = "width: 18rem; display:inline-block;";

    // Adds the card to the pokemonCardContainer
    document.getElementById("pokemonCardContainer").prepend(divCard);

    // Creates the image element for the card and adds it
    let imgCard = document.createElement("img");
    imgCard.classList.toggle("card-img-top");
    imgCard.src = attributesValues.imageUrl;
    divCard.append(imgCard);

    // Creates the card body div and adds it to the card
    let divCardBody = document.createElement("div");
    divCardBody.classList.toggle("card-body");
    divCard.append(divCardBody);

    // Creates the card title and adds it to the card body
    let headerCard = document.createElement("h5");
    headerCard.classList.toggle("card-title");
    headerCard.textContent = pokemonName.toUpperCase();
    divCardBody.append(headerCard);

    // Creates the card text and adds it to the card body
    let pCard = document.createElement("p");
    pCard.classList.toggle("card-text");
    pCard.innerHTML = getTextDecsriptionFromAttributes(attributesValues);
    divCardBody.append(pCard);

    // Creates the delete button and adds it to the card body
    let deleteButton = document.createElement("button");
    deleteButton.classList.toggle("btn");
    deleteButton.classList.toggle("btn-danger");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = onDelete;
    divCardBody.append(deleteButton);
    

    pokemonNamesHistory.push(pokemonName.toLowerCase());
}








export function showAlert(alertType="404"){
    switch(alertType){
        case "404":
            document.getElementById("errorDiv").innerHTML = "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\"><strong>Error 404</strong> you should check the spelling of the pokemon Name.<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>";
            break;
        case "emptyName":
            document.getElementById("errorDiv").innerHTML = "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\"><strong>Empty Name</strong> Plase enter a name in the input field.<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>";
            break;
        case "repeated":
            document.getElementById("errorDiv").innerHTML = "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\"><strong>Repeated Pokemon</strong> The pokemon is already on the dashboard.<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>";
            break;
    }
}