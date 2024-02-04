const { readdirSync } = require('fs');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

// security middleware
const rateLimit = require('express-rate-limit')
const mongoSanitizer = require('express-mongo-sanitize')
const helmet = require('helmet')
const cors = require('cors')
const hpp = require('hpp')
const morgan = require('morgan')
require('dotenv').config();

// database lab imports
const mongoose = require('mongoose');
const { error } = require('console');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors())
app.use(mongoSanitizer())
app.use(helmet())
app.use(hpp())
app.use(morgan('dev'))




const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7', // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
  legacyHeaders: false, // X-RateLimit-* headers
	// store: ... , // Use an external store for more precise rate limiting
})


app.use(limiter)



readdirSync('./src/routes').map((file)=>{app.use('/api/v1', require(`./src/routes/${file}`))})


app.use("*", (req, res) => {
  return res.status(404).json({message: 'not found'})
 })


 // mongodb connect ------------------
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("database connection successful")
  })
  .catch(error =>console.log(error))
  


module.exports = app;


