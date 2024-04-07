function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const sumTotal = quantity * pricePerDroid;
    if (customerCredits < sumTotal) {
        return ("Insufficient funds!");
    } else {
        return (`You ordered ${quantity} droids worth ${sumTotal} credits!`);
    }
}