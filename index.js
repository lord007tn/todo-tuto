// import packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

// connect to database
mongoose.set( "useNewUrlParser", true );
mongoose.set( "useFindAndModify", false );
mongoose.set( "useCreateIndex", true );
mongoose.set( "useUnifiedTopology", true );
mongoose.connect(
  "mongodb+srv://todoadmin:ZIdfJySMNbmn5MA5@todo.mupmv.mongodb.net/<dbname>?retryWrites=true&w=majority"
);
mongoose.connection.on( "connected", () => {
	console.log( "DB Connected" );
} );
mongoose.connection.on( "error", ( err ) => {
	console.log( "DB Connection failed with - ", err );
} );
// import Routes middlewares
const todoRoutes = require('./routes/todo.routes')
// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
// routes middlewares
app.use("/todo", todoRoutes)
// listening server
const port = 8000;
app.listen(port, () => {
  console.log(`server yemchi 3al port ${port}`);
});
