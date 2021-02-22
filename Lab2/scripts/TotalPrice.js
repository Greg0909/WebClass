// Computes the sum of all the productPrices and displays it on
// the element with id totalPrice.
export const updateTotalCost = (totalPrice) => {
    document.getElementById("totalPrice").innerText = "Total Price: " + totalPrice.toFixed(2) + " pesos";
}