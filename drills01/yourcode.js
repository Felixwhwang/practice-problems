
function sumArray(array){
  //use reduce built in function to accumulate the sum value
	return array.reduce((acc, cur) => {
    return acc + cur;
  })
}

function fitWithinVal(array, target){
  var sum = array[0];
  var result = [array[0]];
  for(let i = 1; i < array.length; i++) {
    if (sum === target) {
      return result;
    } else if (sum < target) {
      sum += array[i];
      result.push(array[i]);
    } else {
      fitWithinVal(array.slice(1), target);
    }
  }
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
