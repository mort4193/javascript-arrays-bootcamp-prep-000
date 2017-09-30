var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


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

function accessElementInArray (array, index){
  var array=[1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var array=[1,2,3]
  return array.shift(0)
}
