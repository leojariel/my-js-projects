let use12hr = true;

function formatTime(hour12 = true) {
 const date = new Date();

 return date.toLocaleTimeString("en-US", {
  hour12: hour12,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
 });
}

const timeFormatBtn = document.querySelectorAll(".h-format-btn");
timeFormatBtn.forEach((btn, index) => {
 btn.addEventListener("click", () => {
  use12hr = index === 0 ? true : false;
  updateUI();
 });
});

setInterval(() => {
 updateUI();
}, 1000);

function updateUI() {
 const clockTimer = document.querySelector(".clock-timer");
 const time = formatTime(use12hr);
 clockTimer.textContent = time;
}

updateUI();
