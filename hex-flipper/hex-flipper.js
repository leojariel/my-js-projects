function generateHex() {
 const chars = "0123456789abcdef";
 let hex = "";
 for (let i = 0; i < 6; i++) {
  hex += chars[Math.floor(Math.random() * 16)];
 }
 return hex;
}

document.querySelector(".shuffle-btn").addEventListener("click", () => {
 const hex = generateHex();
 document.querySelector(".hex-code").textContent = `#${hex}`;
 document.body.style.backgroundColor = `#${hex}`;
});

document.querySelector(".hex-code-wrapper").addEventListener("click", () => {
 const hexCode = document.querySelector(".hex-code").textContent;
 navigator.clipboard
  .writeText(hexCode)
  .then(() => alert("Copied: " + hexCode))
  .catch(() => alert("Failed to copy."));
});
