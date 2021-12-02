const day2data = require('../data/day2data')
const directionsData = day2data.directions

const determineDepth = () => {
  let horizontal = 0
  let depth = 0

  directionsData.forEach(direction => {

    if (direction.split(' ')[0] === 'forward') {
      horizontal = horizontal + parseInt(direction.split(' ')[1])
    }

    if (direction.split(' ')[0] === 'down') {
      depth = depth - parseInt(direction.split(' ')[1])
    }

    if (direction.split(' ')[0] === 'up') {
      depth = depth + parseInt(direction.split(' ')[1])
    }
  })

  return horizontal*depth
}

console.log(determineDepth());