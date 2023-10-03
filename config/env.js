const dotenv = require("dotenv").config();

module.exports = {
  local_port: process.env.LOCAL_PORT,
  debug: process.env.DEBUG,
};
