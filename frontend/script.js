async function loadInfo() {

    try {

        const response = await fetch('/server-info');

        const data = await response.json();

        document.getElementById('hostname').innerText = data.hostname;
        document.getElementById('platform').innerText = data.platform;
        document.getElementById('arch').innerText = data.architecture;
        document.getElementById('uptime').innerText = data.uptime;
        document.getElementById('memory').innerText = data.totalMemory;

    } catch (error) {

        alert("Unable to fetch server information");

        console.error(error);
    }
}
