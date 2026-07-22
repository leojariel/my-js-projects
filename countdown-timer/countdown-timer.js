function closeAllDropdowns() {
 document
  .querySelectorAll(".suggestion-list")
  .forEach((list) => list.classList.remove("active"));
}

document.addEventListener("focusin", (event) => {
 if (event.target.classList.contains("dropdown-input")) {
  closeAllDropdowns();

  const parent = event.target.closest(".input-field");
  const list = parent.querySelector(".suggestion-list");
  list.classList.add("active");
 }
});

document.addEventListener("click", (event) => {
 if (event.target.tagName === "LI" && event.target.closest(".input-field")) {
  const parent = event.target.closest(".input-field");
  const input = parent.querySelector(".dropdown-input");

  if (event.target.closest(".months")) {
   input.value = event.target.textContent.split("-")[0].trim();
  } else {
   input.value = event.target.textContent;
  }

  closeAllDropdowns();
  return;
 }
 if (!event.target.closest(".input-field")) {
  closeAllDropdowns();
 }
});
