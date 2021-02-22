// Takes the product info and creates a new card to display the product. This
// card is displayed as an element of the productList element. Each element
// contains a delete button that triggers the removal from the graphical web
// page and the invokes the onDeleteProduct to remove the product from the
// productRecord.
export const addProduct = (productName, productPrice, onDeleteProduct) => {
    let productList = document.getElementById("productList");
    let listItem = document.createElement("li");
    let productNameP = document.createElement("p");
    let productPriceP = document.createElement("p");
    let productDeleteButton = document.createElement("button");
        
    productNameP.innerText = productName;
    productPriceP.innerText = parseFloat( productPrice ).toFixed(2) + " pesos";
    productDeleteButton.innerText = "Delete";
    productDeleteButton.onclick = () => { 
        onDeleteProduct(productName)
        productList.removeChild(listItem);
    };

    productDeleteButton.className = "delete-button";

    listItem.append(productNameP);
    listItem.append(productPriceP);
    listItem.append(productDeleteButton);
    listItem.className = "card-horizontal";

    productList.append(listItem);
}