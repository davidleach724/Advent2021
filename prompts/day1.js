const day1data = require('../data/day1data')

const findIncrease = () => {
  day1data.depth.reduce((acc, elem, i) => {
    if (elem < day1data.depth[i+1]) {
      acc++
      console.log(acc)
    }
    return acc
  }, 0)
}

findIncrease();