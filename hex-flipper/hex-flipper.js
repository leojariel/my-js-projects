const shuffleBtn = document.querySelector(".shuffle-btn");
const hexCodeWrapper = document.querySelector(".hex-code-wrapper");
const hexCode = document.querySelector(".hex-code");

function generateHex() {
 const chars = "0123456789abcdef";
 let hex = "";
 for (let i = 0; i < 6; i++) {
  hex += chars[Math.floor(Math.random() * 16)];
 }
 return hex;
}

function updateUI() {
 shuffleBtn.addEventListener("click", () => {
  const hex = generateHex();
  hexCode.textContent = `#${hex}`;
  document.body.style.backgroundColor = `#${hex}`;
 });
}

function copyClipboard() {
 hexCodeWrapper.addEventListener("click", () => {
  const hex = hexCode.textContent;
  navigator.clipboard
   .writeText(hex)
   .then(() => alert("Copied: " + hex))
   .catch(() => alert("Failed to copy"));
 });
}

updateUI();
copyClipboard();
