const sum = (a,b) => {
    return a + b;
};

console.log(sum(7,3));

const oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromDollarToYen = ( dollar) => {
    const euros = dollar/oneEuroIs.USD;
    const yenes = euros*oneEuroIs.JPY;
    return yenes;
} 
console.log(fromDollarToYen(100));

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};
const fromYenToPound = (yenes) => {
    const euros = yenes/oneEuroIs.JPY
    const pound = euros* oneEuroIs.GBP
    return pound;
};


module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };