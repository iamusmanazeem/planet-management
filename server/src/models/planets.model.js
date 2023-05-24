const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const result = [];
const habitable = [];
fs.createReadStream(path.join(__dirname, "..", "..", "data/kepler_data.csv"))
  .pipe(
    parse({
      columns: true,
      comment: "#",
    })
    // pipe that bind readable and writeable stream
  )
  .on("data", (data) => {
    if (isHabitable(data)) {
      habitable.push(data);
    }
    result.push(data);
  })
  .on("error", (err) => console.log(err))
  .on("end", () => {
    console.log("habitable planets", habitable.length); // planet length that are habitant
  });

function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 && // Insolation Flux [Earth flux]
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

const getHapitablePlanets = () => {
  return habitable;
};
module.exports = { habitable, result, getHapitablePlanets };

