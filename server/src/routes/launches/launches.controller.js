const { getAllLaunches } = require("../../models/launches.model");
const httpGetAllLaunches = (req, res) => {
  console.log("launches", getAllLaunches());
  return res.status(200).json(getAllLaunches());
};

module.exports = { httpGetAllLaunches };

