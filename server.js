const express = require("express");
const ApiRoutes = require('./api-route')
const Aposts = require('./aposts')


const PORT = process.env.PORT || 3000 //Main server port(s)
const app = express();





//<---------- Middlewares ------------->//

//For index.js file to be used
//app.use('/static', express.static('Front-end/static'))
app.use(express.static(__dirname +'/Front-end'))
app.use('/api',ApiRoutes)
//app.use('/posts', Aposts)



//<---------- Routes ------------->//

//Home Page Route
app.get('*', (req, res)=>
{
    res.sendFile('Front-end/index.html',{ root : __dirname })
});



//Server Start 
app.listen(PORT, () => {console.log(`Express server is running on port:${PORT}` )})