const express=require("express");
const app=express();
const userroute=require("./routes/user")
const ratelimit=require("express-rate-limit");
const dataroute=require("./routes/Data")
require('dotenv').config()
const {Server}=require("socket.io");
const http=require('http');
const Notification=require('./db');


const cors=require('cors');  //cors is liye use hota hai taki jab bhi hamara backend or frontend alag alag locala host par chal raha hota hai to hamara browser allow nahi karta hai dusare local host wale frontend ko dusrare local host ke backend ho hit kare ki permision nahi deta hai cors help karta hai taki wo waysa kar sake with  the help off orogin se kar ke or agar hamko sabko allow karna haio tab empty rakh dena
app.use(cors())

// const server = http.createServer(app);
// const io = new Server(server);

// ab yaha par server ka connection establish kar lete hai niche wla code is liye hai taki agar koi new notifiucatin ate hai sendNotification event nam ko to usko catch karke new notifaction bana kar save kar lene ke liye hai 
// io.on('connection',(socket)=>{
//     console.log('Developer connected');
//     socket.on('sendNotification', async ({ developerId, clientEmail, projectDetails }) => {
//         try {
//             const notification = new Notification({ developerId, clientEmail, projectDetails });
//             await notification.save();
//             io.emit(`notification-${developerId}`, notification); 
//         } catch (error) {
//             console.error("Error saving notification:", error);
//         }
//     });
    
//     socket.on('disconnect',()=>{
//         console.log('Developer disconnected');
//     });
// })


// midle wire
// the below rate limmiter is for all route set up to 100 req for every 15 min
const limit=ratelimit({
    windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: 'draft-8', 
	legacyHeaders: false,
	
})



app.use(limit)
app.use(express.json());
app.use("/user",userroute);
app.use("/user/Search",dataroute)


const PORT=3000;
app.listen(PORT,function(){
    console.log(`App is listing on port number ${PORT}`);
})
