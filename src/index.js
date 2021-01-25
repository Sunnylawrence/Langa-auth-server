const express = require("express")

require('./db/mongoose')

const User = require('./model/user')

const userRouter = require('./router/user')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)

app.listen(port, () => {
    console.log('server is running on port ' + port);
})
