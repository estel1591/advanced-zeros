module.exports = function getZerosCount(number, base) {
    let currentBase = base;
    let currentNum = number;


    let primeFactor = [];
    let factorNumber = 2;
    let bestFactor = 0;
    let pow = 1;

    getNum(currentBase, factorNumber, primeFactor);
    bestFactor = getMaxOfArray(primeFactor);

    if (primeFactor.reverse().indexOf(bestFactor) != primeFactor.reverse().lastIndexOf(bestFactor)) {
        pow = primeFactor.reverse().lastIndexOf(bestFactor) + 1;
    }


    let result = 0;
    for ( var i = bestFactor; currentNum/i > 1; i *= bestFactor ) {
        result += Math.trunc(currentNum/i);
    }


    return Math.trunc(result/pow);
};

function getNum (num, factorNumber, arr) {
    if (num % factorNumber === 0) {
        arr.push(factorNumber);
        num = num / factorNumber;
        getNum(num, factorNumber, arr);
    } else if (num % factorNumber !== 0) {
        if (!(num <= factorNumber)) {
            factorNumber++;
            getNum(num, factorNumber, arr);
        }
    }
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}