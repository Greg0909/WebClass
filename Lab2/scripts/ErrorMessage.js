
// Returns true if the product name is not empty, not repeated and the prices
// is in a valid format that can be parsed into a float.
export const isInputCorrect = (productName, productPrice, productRecord=[]) => {
    let allGood = true;

    // Checks for empty Name
    if(productName == ""){
        let errorMessage = document.getElementById("emptyName");
        errorMessage.style.display = "block"
        allGood = false;
    }
    else {
        let errorMessage = document.getElementById("emptyName");
        errorMessage.style.display = "none"
    }

    // Checks for repeated Names
    productRecord.forEach( (product) => {
        if(product.productName == productName) {
            let errorMessage = document.getElementById("repeatedName");
            errorMessage.style.display = "block"
            allGood = false;
        }
        else if(allGood) {
            let errorMessage = document.getElementById("repeatedName");
            errorMessage.style.display = "none"
        }
    });

    // Checks for valid Price input (should be an integer or decimal number)
    if( !( /^\d+(\.\d+|)$/.test( productPrice ) ) ) {
        let errorMessage = document.getElementById("notNumber");
        errorMessage.style.display = "block"
        allGood = false;
    }
    else {
        let errorMessage = document.getElementById("notNumber");
        errorMessage.style.display = "none"
    }

    return allGood;
}