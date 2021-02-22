import {addProduct} from './AddProduct.js';
import {isInputCorrect} from './ErrorMessage.js';
import {updateTotalCost} from './TotalPrice.js';

// An array that saves the record of products that are shownn
// in theshopping web page.
let productRecord = [
    { productName: "Lata cocacola", productPrice: 17.00},
    { productName: "Lapiz", productPrice: 7.00}
];
let totalPrice = 0;

// Its called when the item delete button is clikced, it recives
// the name of the product to be deleted as the parameter. The
// product to be deleted is removed from the productRecord by this
// function and the product card is removed by the logic in AddProduct.
// Also after deleting an element the total price is updated.
const onDeleteProduct = (productName) => {
    productRecord = productRecord.filter( (product) => { 
        
        // Search inside productRecord to find the product to delete
        // and updates totalPrice substracting the price of the product.
        if(product.productName == productName) {
            totalPrice -= product.productPrice;
            return false;
        }

        return true;
    });
    updateTotalCost( totalPrice );
}

// When the user tries to add a new product the inputs are checked to
// be valid. If they are valid the product is added visually to the web page
// and to the productRecord. Also if the product is added the Total price is updates.
productForm.onsubmit = (e) => {
    e.preventDefault();

    const productName = e.target.querySelector("#productName").value;
    const productPrice = e.target.querySelector("#productPrice").value;

    if( isInputCorrect(productName, productPrice, productRecord) ) {
        // Adds product
        addProduct(productName, productPrice, onDeleteProduct);
        productRecord.push({productName, productPrice: parseFloat(productPrice)});

        // Updates total cost
        totalPrice += productRecord[ productRecord.length-1 ].productPrice;
        updateTotalCost( totalPrice );
    }
    else {
        alert("Wrong Input, Check error Messages");
    }
    
};

// The web page starts with 0 displayed product cards. With this foreach, at the
// start, all products inside productRecord are added visually as cards to the
// web page.
productRecord.forEach((product)=>{
    if( isInputCorrect(product.productName, product.productPrice) ) {
        addProduct(product.productName, product.productPrice, onDeleteProduct);
        totalPrice += product.productPrice;
    }
})
updateTotalCost( totalPrice );