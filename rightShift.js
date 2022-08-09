const floor = num => {return Math.floor(num)};
const powerTwo = num => {return 2**num};

function rightShift(num, power) {
    return floor(num/powerTwo(power));
}