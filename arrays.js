var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  array = [1]
  return addElementToBeginningOfArray(array, 'foo')
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return destructivelyAddElementToBeginningOfArray([1], 'foo')
}

function addElementToEndOfArray(array,element) {
  
}

function destructivelyAddElementToEndOfArray(array,element) {
  
}