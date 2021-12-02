const day2data = require('../data/day2data')
const directionsData = day2data.directions

const determineDepth = () => {
  let horizontal = 0
  let depth = 0
  
  directionsData.forEach(direction => {
    let value = parseInt(direction.split(' ')[1])

    if (direction.split(' ')[0] === 'forward') {
      horizontal = horizontal + value
    }

    if (direction.split(' ')[0] === 'down') {
      depth = depth - value
    }

    if (direction.split(' ')[0] === 'up') {
      depth = depth + value
    }
  })

  return horizontal*depth*-1
}

console.log(determineDepth());