const day2data = require('../data/day2data');
const directionsData = day2data.directions;

const determineDepth = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  directionsData.forEach((direction) => {
    let value = parseInt(direction.split(' ')[1]);

    if (direction.split(' ')[0] === 'forward') {
      horizontal = horizontal + value;
      depth = aim * value
    }

    if (direction.split(' ')[0] === 'down') {
      aim = aim - value;
    }

    if (direction.split(' ')[0] === 'up') {
      aim = aim + value;
    }
  });

  return horizontal * depth * -1;
};

console.log(determineDepth());
