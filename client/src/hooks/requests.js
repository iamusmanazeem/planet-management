const END_POINT = "http://localhost:8000";

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${END_POINT}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${END_POINT}/launches`);
  const fetchedlaunches = await response.json();
  return fetchedlaunches.sort((a, b) => a.flightNumber - b.flightNumbers);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

