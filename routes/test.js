const { Router } = require("express");

const {z}=require('zod')
const testrouter = Router();

const Inp=z.object({
    a: z.number(),
    b: z.number()
})

testrouter.post('/sum', (req, res) => {
    const parsedInp=Inp.safeParse(req.body);

    if(!parsedInp){
        return res.status(411).json({msg:"Invalid input"})
    }

    const ans=parsedInp.data.a+parsedInp.data.b;
    

    res.status(200).json({ answer: ans });  // wrap the sum inside "answer"
});


testrouter.post("/mul",(req,res)=>{
    const parsedInp = Inp.safeParse(req.body);
    if(!parsedInp){
        return res.status(411).json({msg:"Invalid input"});

    }
    const ans = parsedInp.data.a*parsedInp.data.b;
    res.status(200).json({
        answer:ans
    })
});

module.exports = testrouter;
