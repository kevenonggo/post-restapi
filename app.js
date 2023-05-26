const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('HALLO GAES!')
})

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let db = mongoose.connection

//Handle error
db.on('error', console.error.bind(console, 'Error database connection'))

//Handle success
db.once('open', () => {
  console.log('Database is connected')
})
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})