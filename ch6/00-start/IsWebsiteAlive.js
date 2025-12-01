// Listing 6.1 IsWebsiteAlive() callback and await versions
//Callback version
const fetch = require("node-fetch");

const isWebsiteAliveWithCallback = (callback) => {
  const website = "http://example.com";
  fetch(website)
    .then((response) => {
      if (!response.ok) {
        //how can we simulate this network issue?
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.text())
    .then((text) => {
      if (text.includes("documentation")) {
        callback({ success: true, status: "ok" });
      } else {
        //how can we test this path?
        callback({ success: false, status: "text missing" });
      }
    })
    .catch((err) => {
      //how can we test this exit point?
      callback({ success: false, status: err });
    });
};

// Await version
const isWebsiteAliveWithAsyncAwait = async () => {
  try {
    const resp = await fetch("http://example.com");
    if (!resp.ok) {
      //how can we simulate a non ok response?
      throw resp.statusText;
    }
    const text = await resp.text();
    const included = text.includes("documentation");
    if (included) {
      return { success: true, status: "ok" };
    }
    // how can we simulate different website content?
    throw "text missing";
  } catch (err) {
    return { success: false, status: err };
  }
};

module.exports = {
  isWebsiteAliveWithCallback,
  isWebsiteAliveWithAsyncAwait,
};
