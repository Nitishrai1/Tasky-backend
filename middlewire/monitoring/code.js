const client = require("prom-client");

// Counter for total HTTP requests
const requestCounter = new client.Counter({
    name: "request_count",
    help: "Total request count",
    labelNames: ["method", "route", "status_code"]
});

// Gauge for active users 
const requestGauge = new client.Gauge({
    name: "active_users",
    help: "Number of users whose requests haven't yet resolved",
    labelNames: ["method", "route"]
});

// Histogram for request durations
const httpRequestDurationMicrosecond = new client.Histogram({
    name: "http_request_duration_ms",
    help: "Duration of HTTP requests in ms",
    labelNames: ["method", "route", "code"],
    buckets: [0.1,1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000]
});

// Middleware to track number of active requests
function activeUserGauge(req, res, next) {
    requestGauge.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    });

    res.on("finish", () => {
        requestGauge.dec({
            method: req.method,
            route: req.route ? req.route.path : req.path
        });
    });

    next();
}

// Middleware to count total requests
function requestCount(req, res, next) {
    const startTime = Date.now();

    res.on("finish", () => {
        const endTime = Date.now();
        console.log(`Request took ${endTime - startTime} ms`);

        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode  // ✅ Corrected from res.status_code
        });
    });

    next();
}

// Middleware to record request duration in histogram
function finalRequestCount(req, res, next) {
    const startTime = Date.now();

    res.on("finish", () => {
        const endTime = Date.now();
        httpRequestDurationMicrosecond.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, endTime - startTime);
    });

    next();
}

// Route to expose metrics to Prometheus
async function getMetrics(req, res) {
    const metrics = await client.register.metrics();
    res.set("Content-Type", client.register.contentType);
    res.end(metrics);
}

module.exports = {
    requestCount,
    finalRequestCount,
    activeUserGauge,
    getMetrics
};
