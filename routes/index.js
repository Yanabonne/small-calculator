const router = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

router.use('/calculator', require('./calculations'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = router;
