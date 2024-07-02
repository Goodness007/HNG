function updateTime() {
    const currentTimeUTC = new Date().toUTCString().split(" ")[4];
    const currentDay = new Date().toUTCString().split(",")[0];
    document.querySelector('[id="currentTimeUTC"]').innerText = currentTimeUTC;
    document.querySelector('[id="currentDay"]').innerText = currentDay;
}

window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
};
