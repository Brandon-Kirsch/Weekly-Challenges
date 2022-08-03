export function sevenBoom(arr){
    if (arr && arr.constructor === Array) {
        // Iterate through provided array
        for (let i of arr) {
            const str = `${i}`;
            
            for (let n = 0; n < str.length; n++){
                if (str[n] === '7') return 'Boom!'
            }
        }
        return 'There is no 7 in the array';
    } else {
        return `Wait, this isn't an array!`;
    }
}