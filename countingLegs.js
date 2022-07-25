const ANIMALS = [2,4,4];

export function altLegCount(...all){
    const validAnimals = ANIMALS.length;
    let list = [];
    // Iterates through all provided parameters to filter out all non-numeric entries
    for (item of all) {
      if (!isNaN(item) && !isNaN(parseInt(item)) && item >= 0){
        list.push(item);
      }
    }

    // For each set of three, adds up the total number of legs. Unsupplied values are presumed 0.
    let result = [];
    for (val in list) {
      const target = Math.floor(val/validAnimals);
      const mod = val % validAnimals;
      mod === 0 ?
        result[target] = list[val]*ANIMALS[mod] :
        result[target] += list[val]*ANIMALS[mod];
    }
    return result;
}