// O(n^2)

const numbers = [1,2,3,4,5]


function findPairs(arr){
for (let i = 0 ; i<numbers.length; i++){
  for (let j = 0 ; j<numbers.length; j++){
    console.log(`Pairs :${arr[i]}, ${arr[j]}`)
  }
}


}



findPairs(numbers)