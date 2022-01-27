const moment = require("moment");
const date = moment().format("DD / MM / YYYY");
console.log(date);
const future = moment().add(3, "days");
console.log(future.format("DD / MM / YYYY"));
