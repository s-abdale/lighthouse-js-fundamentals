// The following code returns a boolean representing whether or not num is odd:
function isOdd(num) {
  if ((num%2) === 0){
    return false;
  }
  else {
    return true;
  }
}

// Testing
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));