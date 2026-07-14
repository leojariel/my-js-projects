let hour12 = true;

function formatTime(hour12 = true) {
 const date = new Date();

 return date.toLocaleTimeString("en-US", {
  hour12: hour12,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
 });
}

const formatBtn = document.querySelectorAll(".h-format-btn");
formatBtn.forEach((btn, index) => {
 btn.addEventListener("click", () => {
  hour12 = index === 0 ? true : false;
  formatBtn.forEach((btn) => btn.classList.remove("active"));
  btn.classList.add("active");
  updateUI();
 });
});

setInterval(() => {
 updateUI();
}, 1000);

function updateUI() {
 const clockTimer = document.querySelector(".clock-timer");
 const time = formatTime(hour12);
 clockTimer.textContent = time;
}

updateUI();
