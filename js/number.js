let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach(valueDisplays => {
    let startVaule = 0;
    let endVaule = parseInt(valueDisplays.getAttribute
        ("date-val"));
    let duration = Math.floor(interval / endVaule);
    let counter = setInterval(function () {
        startVaule += 1;
        valueDisplays.textContent = startVaule;
        if (startVaule == endVaule) {
            clearInterval(counter);
        }
    }, duration);
});
