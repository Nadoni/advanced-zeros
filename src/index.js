module.exports = function getZerosCount(number, base) {

    let count;
    let countPrime;
    let minZero = number;
    let copyNum;

    let primeArray = simple(2, base);


    function simple(min, base) {
        var arr = [];
        outer: for (min; min <= base; min++) {
            if (min > 1) {


                for (var i = 2; i * i <= min; i++) {
                    if (min % i == 0) continue outer;

                }
                arr.push(min);
            }
            //var sqr = (Math.floor(Math.sqrt(min)));
        }
        return arr;
    }

    for (let i = 0; i <= base; i++) {

        if (base % primeArray[i] === 0) {
            countPrime = 0;
            while (base % primeArray[i] === 0) {
                countPrime++;
                base /= primeArray[i];
            }
            count = 0;
            copyNum = number;
            while (copyNum / primeArray[i] >= 1) {
                count += Math.trunc(copyNum / primeArray[i]);
                copyNum /= primeArray[i];
            }


            minZero = Math.min(minZero, Math.trunc(count / countPrime));

        }
    }
    return minZero;


}