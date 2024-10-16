const dataService = require('../services/dataService');

exports.getData = async (req, res, next) => {
  try {
    const data = await dataService.fetchData();
    res.json(data);
  } catch (error) {
    next(error);
  }
};
