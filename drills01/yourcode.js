
function sumArray(array){
  //use reduce built in function to accumulate the sum value
	return array.reduce((acc, cur) => {
    //acc = accumulate and initial value, cur is current value from second index
    return acc + cur;
  })
}

function fitWithinVal(array, target){
  //store the total sum value
  var sum = 0;
  //possible element will be added to result array
  var result = [];
  for (var i = 0; i < array.length; i++) {
    //if current value added to sum will not exceed the target value, the current value will be added to result array
    if (sum + array[i] < target) {
      //checking statement: console.log(array[i] + " " + sum);
      sum += array[i];
      result.push(array[i]);
    }
  }
  return result;
}

function getAllNamesShorterThan(array, value){
  var result = [];
  //check each value in the array
  array.forEach((cur) => {
    //get current value length and compare to the given value
    if(cur.length < value) result.push(cur);
  })
  return result;
}

function makeLabel(person) {
  return person.greeting + " " + person.givenName + " " + person.familyName + "\n" + person["home address"].streetNumber + " " + person["home address"].streetName + "\n" + person["home address"].city + ", " + person["home address"].state + " " + person["home address"].zip;
}
