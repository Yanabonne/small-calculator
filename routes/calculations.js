const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  calculateSum,
  calculateSubtraction,
  calculateMultiplication,
  calculateDivision,
} = require('../controllers/calculations');

router.get('/summarize', celebrate({
  query: Joi.object().keys({
    firstNumber: Joi.number().required(),
    secondNumber: Joi.number().required(),
  }),
}), calculateSum);

router.get('/multiply', celebrate({
  query: Joi.object().keys({
    firstNumber: Joi.number().required(),
    secondNumber: Joi.number().required(),
  }),
}), calculateMultiplication);

router.get('/divide', celebrate({
  query: Joi.object().keys({
    firstNumber: Joi.number().required(),
    secondNumber: Joi.number().required(),
  }),
}), calculateDivision);

router.get('/substract', celebrate({
  query: Joi.object().keys({
    firstNumber: Joi.number().required(),
    secondNumber: Joi.number().required(),
  }),
}), calculateSubtraction);

module.exports = router;
