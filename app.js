const tree = require("./generators/tree.js");
const events = require("./classes/event.js");

tree.getStatus();

events.forEach((event,index) => {
    console.log((index+1)+") "+event.toString());
});