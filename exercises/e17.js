
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code


export function flatArrays(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      
      result.push(arr[i]);
    }
  }

  return result;
}





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
