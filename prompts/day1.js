const day1data = require('../data/day1data')

const findIncreaseDepth = () => {
  return day1data.depth.reduce((acc, elem, i) => {
    if (elem < day1data.depth[i+1]) {
      acc++
    }
    return acc
  }, 0)
}

console.log('p1: ', findIncreaseDepth());

const findIncreseWindow = () => {
  let acum = 0
  for( let i=0; i < day1data.depth.length; i ++) {
    let window1 = day1data.depth[i] + 
                  day1data.depth[i +1] + 
                  day1data.depth[i + 2];
    let window2 = day1data.depth[i + 1] + 
    day1data.depth[i +2] + 
    day1data.depth[i + 3];

    if (window1 < window2) {
      acum++
    }
  }
  return acum
}

console.log(findIncreseWindow());