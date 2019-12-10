// Complete the plusMinus function below.
// https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
  let minus = 0
  let plus = 0
  let zero = 0

  arr.forEach(element => {
    if (element > 0) {
      plus++
    } else if (element < 0) {
      minus++
    } else {
      zero++
    }
  })

  return [
    (plus / arr.length).toFixed(6),
    (minus / arr.length).toFixed(6),
    (zero / arr.length).toFixed(6)
  ]
}

test("", () => {
  const result = plusMinus([-4, 3, -9, 0, 4, 1])

  expect(result[0]).toBe("0.500000")
  expect(result[1]).toBe("0.333333")
  expect(result[2]).toBe("0.166667")
})