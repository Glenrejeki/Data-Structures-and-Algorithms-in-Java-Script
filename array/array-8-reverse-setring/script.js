// 1. Convert string to array (split method)
  const reverseString = (str) => str.split(``)
  console.log(reverseString(`Hello `))
  
  // 2. Reverse the array (reverse method)
  const reverseString2 = (str) => str.split(``).reverse()
  console.log(reverseString2(`Hello`))
  
  // 3. Conver array back to string (join method )
  const reverseString3 = (str) => str.split(``).reverse().join(``)
  console.log(reverseString3(`Hello`))