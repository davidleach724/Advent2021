const day1data = require('../data/day1data');
const depthData = day1data.depth;

const findIncreaseDepth = () => {
  return depthData.reduce((acc, depth, i) => {
    if (depth < depthData[i + 1]) {
      acc++;
    }
    return acc;
  }, 0);
};

const findIncreaseWindow = () => {
  return depthData.reduce((acc, depth, i) => {
    let window1 = depth + depthData[i + 1] + depthData[i + 2];
    let window2 = depthData[i + 1] + depthData[i + 2] + depthData[i + 3];

    if (window1 < window2) {
      acc++;
    }
    return acc;
  }, 0);
};

console.log('puzzle 1: ', findIncreaseDepth());
console.log('puzzle 2: ', findIncreaseWindow());

// Original way of solving puzzle 2

// const findIncreaseWindow = () => {
//   let acum = 0;
//   for (let i = 0; i < depthData.length; i++) {
//     let window1 =
//       depthData[i] + depthData[i + 1] + depthData[i + 2];

//     let window2 =
//       depthData[i + 1] + depthData[i + 2] + depthData[i + 3];

//     if (window1 < window2) {
//       acum++;
//     }
//   }
//   return acum;
// };
