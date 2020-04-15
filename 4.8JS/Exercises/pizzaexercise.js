var toppings = ['cheese', 'pineapple', 'peppers'];

function pizza (){
    var moreToppings = toppings.join(' and ');

    return " A delicious pizza that has " + moreToppings
}

console.log(pizza())