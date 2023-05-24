const { getHapitablePlanets } = require("../../models/planets.model");
const httpGetAllPlanets = (req, res) => {
  return res.status(200).json(getHapitablePlanets);
};

module.exports = { httpGetAllPlanets };

