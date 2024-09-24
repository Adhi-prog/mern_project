const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://adhi:adhi@sample.nqzmb.mongodb.net/?retryWrites=true&w=majority&appName=sample"
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Db connected");
});
connection.on("erroe", () => {
  console.log("Db error");
});
module.exports = mongoose;