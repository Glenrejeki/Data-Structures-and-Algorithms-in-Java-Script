/**
 * 1. Create an empty array to hold the chucks
 * 2. Set a starting index to keep track of where we are in the original array 
 * 3. Loop throught the original array as long as the index hasn't reached the end 
 * 4. Extract a Chunck of desired size from the original array 
 * 5. Add the extracted chunck to the 'chucked' array
 * 6. Move the index forward by the chuxk size to get the next chunk
 * 7. Return the finnal array of chunks
 */

const chunck = (array, size) => {
  const chucked = []
  let index = 0 


  while (index < array.length){
    const chunck = array.slice(index, index+size)
    console.log(chunck)
    chucked.push(chunck) // add the result slice to the result array 
    index+= size // move forward indx, so not infininte loop
  }
  return chucked


}


console.log(chunck([1,2,3,4,5,6,7,8],3))

