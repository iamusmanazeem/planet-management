const launches = new Map();
const launch = {
  flightNumber: 100,
  mission: "Kepler Explorer 1",
  rocket: "Explorere ISI",
  launchDate: new Date(),
  target: "kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = () => {
  return Array.from(launches.values());
};

module.exports = {
  launches,
  getAllLaunches,
};

