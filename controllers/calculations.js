module.exports.calculateSum = (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  const result = firstNumber + secondNumber;
  res.send(result);
};

module.exports.calculateSubtraction = (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  const result = firstNumber - secondNumber;
  res.send(result);
};

module.exports.calculateMultiplication = (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  const result = firstNumber * secondNumber;
  res.send(result);
};

module.exports.calculateDivision = (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  const result = firstNumber / secondNumber;
  res.send(result);
};
