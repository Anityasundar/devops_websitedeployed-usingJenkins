const express = require("express");
const cors = require("cors");
const os = require("os");
const path = require("path");   // ✅ ADD THIS

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* ✅ ADD THIS LINE */
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/server-info", (req, res) => {
    const serverInfo = {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        uptime: Math.floor(os.uptime() / 3600) + " Hours",
        totalMemory: Math.round(os.totalmem() / (1024 * 1024 * 1024)) + " GB",
        freeMemory: Math.round(os.freemem() / (1024 * 1024 * 1024)) + " GB",
        cpuCount: os.cpus().length
    };

    res.json(serverInfo);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
