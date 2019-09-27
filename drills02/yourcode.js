

function countOccurences(array, word){
  return array.reduce((count, cur) => {
    if (cur === word) count++;
    return count;
  }, 0);
}

function wordLengths(array){
  var result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i].length);
  }

  return result;
}

function getMinMaxMean(array){
  var min = max = array[0];
  var sum = 0;
  array.forEach((cur) => {
    sum += cur;
    if (cur < min) min = cur;
    if (cur > max) max = cur;
  });
  return {"min": min, "max": max, "mean": sum/array.length};
}

function findMode(array){
  var hashTable = {};
  //save most ocurred number times
  var times = 0;
  var result;
  array.forEach((cur) => {
    if(hashTable.hasOwnProperty(cur) === false) {
      hashTable[cur] = 1;
    } else {
      hashTable[cur] += 1;
      //get most times of number when go through the array
      if (hashTable[cur] >= times) {
        times = hashTable[cur];
        result = cur;
      }
    }
  })

  return presult;
}
