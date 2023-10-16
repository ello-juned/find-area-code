// Importing the data from a JSON file (assuming it contains information about areas)
const areaData = require("./data.json");

/**
 * Find Data by City/State
 *
 * This function searches for area data by either city or state name.
 *
 * @param {string} cityOrState - The name of the city or state to search for.
 *
 * @returns {Object|null} - Returns the area data object if found, or null if not found.
 */
function findDataByCityState(cityOrState) {
  // Use the `find` method to search for an entry with a matching city or state
  const result = areaData.find((entry) => {
    // Split the list of cities into an array
    const cities = entry.Cities.split(",").map((c) => c.trim());

    // Check if the input matches any city in the array or the state
    return cities.some((c) => c === cityOrState) || entry.State === cityOrState;
  });

  return result || null; // Return the found data or null if not found
}

/**
 * Verify Area Code
 *
 * This function checks if a given area code exists in the area data.
 *
 * @param {string} areaCode - The area code to verify.
 *
 * @returns {boolean} - Returns true if the area code is found, false otherwise.
 */
function verifyAreaCode(areaCode) {
  // check if any entry's AreaCode matches the input
  return areaData.some((entry) => entry.AreaCode === areaCode.toString());
}

// Export the functions as part of the library
module.exports = {
  findDataByCityState,
  verifyAreaCode,
};
