const array = [1, 2, 3, 4, 5, 6, 7]; 

function removeElement(array, value) {
  array = array.filter((number) => number !== value);
  console.log(array)
}

removeElement(array, 5)
