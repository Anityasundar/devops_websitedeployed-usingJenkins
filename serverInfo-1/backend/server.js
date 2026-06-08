const express = require("express");
const os = require("os");
const path = require("path");
const si = require("systeminformation");

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "frontend")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Server information API
app.get("/server-info", async (req, res) => {

    const cpu = await si.currentLoad();

    res.json({
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        uptime: Math.floor(os.uptime() / 3600) + " Hours",
        totalMemory:
            Math.round(os.totalmem() / (1024 * 1024 * 1024)) + " GB",

        cpuUsage: cpu.currentLoad.toFixed(2) + "%"
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
