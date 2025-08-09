// Note : this is not the better solution

function twoSum(nums, target){
  let results =[]
  // Loop through each number in the list 
  for(let i = 0 ; i < nums.length ; i++){
    // For each number,check the rest of the list 
    for (let j = i + 1 ; j < nums.length; j++){
      // If the current number and the one we're checking add up to the target, return their indexes
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return results
}


const result =  twoSum([2,7,11,16],9)
const result2 =  twoSum([1,3,7,9,2],11)
console.log("Hasil pasangan indeks (case 1):", result)
console.log("Hasil pasangan indeks (case 2):", result2)
