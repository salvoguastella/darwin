const tree = require("./generators/tree.js");
const events = require("./classes/event.js");

tree.getStatus();

events.forEach(event => {
    console.log(event.toString());
});