const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const cors = require('./middlewares/cors')
const connectToDatabase = require('./db/connect')
const apiRouter = require("./routes/apiRouter")
const cookieParser = require('cookie-parser')
const pagesRouter = require("./routes/pages")

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public')),
  )
  
const PORT = 3001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
