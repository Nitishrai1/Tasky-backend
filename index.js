const express=require("express");
const app=express();
const userroute=require("./routes/user")
const ratelimit=require("express-rate-limit");
const dataroute=require("./routes/Data")
require('dotenv').config()
const {Server}=require("socket.io");
const http=require('http');
const Notification=require('./db');
const testrouter=require('./routes/test');


const cors=require('cors');  //cors is liye use hota hai taki jab bhi hamara backend or frontend alag alag locala host par chal raha hota hai to hamara browser allow nahi karta hai dusare local host wale frontend ko dusrare local host ke backend ho hit kare ki permision nahi deta hai cors help karta hai taki wo waysa kar sake with  the help off orogin se kar ke or agar hamko sabko allow karna haio tab empty rakh dena
app.use(cors({
	origin:"https://frontend-rouge-iota-97.vercel.app/",
	Credential:true
}))

const limit=ratelimit({
    windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: 'draft-8', 
	legacyHeaders: false,
	
})



app.use(limit)
app.use(express.json());
app.use("/",testrouter);

app.use("/user",userroute);
app.use("/user/Search",dataroute)


const PORT=3000;
const server=app.listen(PORT,function(){
    console.log(`App is listing on port number ${PORT}`);
})

module.exports={server,app}



