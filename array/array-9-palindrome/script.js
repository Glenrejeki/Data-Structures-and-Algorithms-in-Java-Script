// 1. Convert string to array

// 2. Reverse the array

// 3. Convert array back to string 

// 4. Compare strings 

const palindrome = (str)=> str.split(``).reverse().join(``) === str
console.log(palindrome(`cddc`))
console.log(palindrome(`hello`))
