// Listing 6.5 Extracting entry points with callback
const fetch = require("node-fetch");

// Entry Point (used for integration testing)
const isWebsiteAliveExtractedWithCallback = (callback) => {
  const website = "http://example.com";
  fetch(website)
    .then(throwOnInvalidResponse)
    .then((response) => response.text())
    .then((text) => {
      // Entry Point
      processFetchSuccess(text, callback);
    })
    .catch((err) => {
      // Entry Point
      processFetchError(err, callback);
    });
};

const throwOnInvalidResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

// Entry Point (used for unit testing)
const processFetchSuccess = (text, callback) => {
  if (text.includes("documentation")) {
    callback({ success: true, status: "ok" });
  } else {
    callback({ success: false, status: "text missing" });
  }
};

// Entry Point (used for unit testing)
const processFetchError = (err, callback) => {
  callback({ success: false, status: new Error(err) });
};

module.exports = {
  isWebsiteAliveExtractedWithCallback,
  processFetchSuccess,
  processFetchError,
};
