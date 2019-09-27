

function getPath(path){
  return path.split('/');
}

function getPathParts(url){
  var result = {
    "protocol": '',
    "host": '',
    "port": '',
    "path": '',
    "file": ''
  };
  var cut1 = url.split(':');
  result.protocol = cut1[0];
  result.host = cut1[1].slice(2);
  var cut2 = cut1.slice(2).join().split('/');
  result.port = parseInt(cut2[0]);
  result.file = cut2[cut2.length-1];
  cut2.pop();
  cut2.shift();
  result.path = cut2.reduce((acc, cur) => {
    acc += "/" + cur;
    return acc;
  }, '');
  result.path = result.path.substr(1);

  return result;
}

function getCapitalCount(array){
  return array.reduce((acc, cur) => {
    if (cur[0] <= 'Z') acc++;
    return acc;
  }, 0);
}

function correctCalcChecker(array){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].result === doMath(array[i].num1, array[i].num2, array[i].op)) {
      result.push(array[i]);
    }
  }

  return result;
}

function doMath(num1, num2, operator){
  var result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  return result;
}
