console.log(process.env);
const express =require('express');
var cookieParser = require('cookie-parser');

const userRoute=require('./routes/user.route');
const authRoute=require('./routes/auth.route' );

var authMiddleware=require('./middlewares/auth.middleware');

const app=express();
const port=3000;

// var users=[
//     {id:1,name:'Hoang'},
//     {id:2,name:"Hang"},
//     {id:3,name:"Hang"}
// ];
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser("aadfnvashierjwejnsdfj212"));

app.get('/',(req,res)=>res.render("index",{
    name:"AAA"
}));

app.use(express.static("public"));

app.use('/users',authMiddleware.requireAuth,userRoute);

app.use('/auth',authRoute);

app.listen(port,()=>console.log('Server listening on port'+port));

