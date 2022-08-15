process.stdin.on("data", data => {
    const input = data.toString().split('\n');
    
    let result = [];
    
    for (i of input) {
      result.push(isPalindromePossible(i))
    }

    process.stdout.write(result.join('\n'))
})

function isPalindromePossible(input) {
  let letters = {};
  
  for (i = 0; i < input.length; i++) {
    const str = input[i];
    if (str.match(/[a-z]|[A-Z]/)) {
      letters[str] = letters[str] ? letters[str] + 1 : 1;
    }
  }
  
  let oddballs = 0;
  for (const key in letters) {
    if (letters.hasOwnProperty(key)) {
      if (letters[key] % 2 === 1) {
        oddballs++;
      }
    }
  }
  
  return oddballs <= 1;
}