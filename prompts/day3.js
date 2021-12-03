const day3data = require('../data/day3data');
const diagnosticTest = day3data.diagnosticTest;
const diagnosticData = day3data.diagnosticReport;

//go through each report
//split report into indiv bits
//loop through split report and add tally

//determine length of array
//if total of pos is > 1/2 array.length, value is 1

//00100
// 0 0 1 0 0

const findPowerConsumption = (reportData) => {
  let reportBitLength = reportData[0].length;
  let gammaRate = '';
  let epsilonRate = '';

  const totalObjectReport = reportData.reduce((obj, report) => {
    report.split('').forEach((bit, i) => {
      if (!obj[i]) {
        obj[i] = 0;
      }
      obj[i] = obj[i] + parseInt(bit);
    });

    return obj;
  }, {});

  for (let i = 0; i < reportBitLength; i++) {
    if (totalObjectReport[i] > reportData.length / 2) {
      gammaRate = gammaRate + '1';
      epsilonRate = epsilonRate + '0';
    } else {
      epsilonRate = epsilonRate + '1';
      gammaRate = gammaRate + '0';
    }
  }

  return (parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))
};

console.log(findPowerConsumption(diagnosticData));
