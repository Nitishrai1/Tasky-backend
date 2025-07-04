const client = require("prom-client");

const requestCounter = new client.Counter({
    name:"request_count",
    help:"Total request count",
    labelNames: ["method","route","status_code"]
});


function requestCount(req,res,next){

    const startTime = Date.now();

    res.on('finish',()=>{
        const endTime = Date.now();
        console.log(`Request took ${endTime-startTime} ms`);

        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.status_code
        });
    });

    next()

}



module.exports ={requestCount}