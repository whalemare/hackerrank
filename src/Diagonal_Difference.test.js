
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
    right += arr[arr.length - 1 - i][i]
  } 

  return Math.abs(left - right)
}

test("simple case", () => {
  const result = diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ])

  expect(result).toBe(Math.abs(1 + 5 + 9 - (3 + 5 + 9)))
})

test("case with 4 dimension", () => {
  const result = diagonalDifference([
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [9, 8, 9, 4],
    [1, 1, 2, 3],
  ])

  expect(result).toBe(Math.abs(1 + 5 + 9  + 3 - (4 + 6 + 8 + 1)))
})