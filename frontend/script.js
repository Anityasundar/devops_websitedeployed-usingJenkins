async function loadInfo() {

    const response =
        await fetch(
            "http://localhost:3000/server-info"
        );

    const data =
        await response.json();

    document.getElementById(
        "hostname"
    ).innerText =
        data.hostname;

    document.getElementById(
        "platform"
    ).innerText =
        data.platform;

    document.getElementById(
        "arch"
    ).innerText =
        data.architecture;

    document.getElementById(
        "uptime"
    ).innerText =
        data.uptime;

    document.getElementById(
        "memory"
    ).innerText =
        data.totalMemory;
}
