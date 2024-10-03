// import { Authsignal } from "@authsignal/node";
const {Authsignal} = require("@authsignal/node")
require('dotenv').config();

const authsignal = new Authsignal({
  secret: process.env.AUTH_SIGNAL_SECRET,
  // apiBaseUrl: process.env.AUTH_SIGNAL_API_BASE_URL
});

console.log('TT01 : authsignal', authsignal)



module.exports = {authsignal}