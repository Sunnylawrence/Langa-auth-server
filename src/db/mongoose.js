
//require mongoose
const mongoose = require("mongoose")
// const validator = require("validator")
//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/user-auth-api',
{useNewUrlParser: true},
{useCreateIndex: true}
)
