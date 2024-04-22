const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mainRoute = require("./routes/main")
const gamesRouter = require("./routes/games")
const cors = require('./middlewares/cors')

app.use(bodyParser.json(), express.static(path.join(__dirname, 'public')))

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
  )

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
