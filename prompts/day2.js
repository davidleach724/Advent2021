const day2data = require('../data/day2data');
const directionsData = day2data.directions;
const testDirections = day2data.testDirections

const determineDepth = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  directionsData.forEach((direction, i) => {
    let value = parseInt(direction.split(' ')[1]);

    if (direction.split(' ')[0] === 'forward') {
      horizontal = horizontal + value;
      depth = depth + (aim * value)
    }

    if (direction.split(' ')[0] === 'down') {
      aim = aim + value;
    }

    if (direction.split(' ')[0] === 'up') {
      aim = aim - value;
    }
    // console.log(i, 'horizontal: ', horizontal)
    // console.log('depth: ', depth)
    // console.log('aim: ', aim)
  });

  return horizontal * depth * -1;
};

console.log(determineDepth());
// incorrect answer 3630088 - too low
// depth was not accumulating previous depth data