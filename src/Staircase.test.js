
/**
 * @link https://www.hackerrank.com/challenges/staircase/problem
 * @param {number} count 
 */
function solver(count) {
  const strings = []
  const space = " "
  const sharp = "#"

  for (let i = 1; i < count + 1; i++) {
    let string = ""
    for (let j = 0; j < count - i; j++) {
      string += space
    }

    for (let k = 0; k < i; k++) {
      string += sharp
    }

    strings.push(string)
    console.log(string)
  }

  return strings
}

test("should be solved", () => {
  const output = solver(3)
  expect(output[0]).toStrictEqual("  #")
  expect(output[1]).toStrictEqual(" ##")
  expect(output[2]).toStrictEqual("###")
})

