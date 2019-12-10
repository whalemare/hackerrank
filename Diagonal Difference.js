
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let left = 0
  let right = 0
  for (let i = 0; i < arr.length; i++) {
    left += arr[i][i]
    right += arr[2-i][i]
  } 
  console.log(left)
  console.log(right)
  return Math.abs(left - right)
}




