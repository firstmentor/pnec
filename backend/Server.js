
const app = require('./app')
// const PORT = 3004
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })