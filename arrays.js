var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var myArray = [element, ...array]

var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var myNewArray=[element, ...array]
  return myNewArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var myNewArray=[...array, element]
  return myNewArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray (x, y){
  var array=[x, y]
  return array[1]
}