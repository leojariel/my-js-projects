function closeAllDropdowns() {
 document.querySelectorAll(".suggestion-list").forEach((list) => {
  list.classList.remove("active");
 });
}

document.addEventListener("focusin", (event) => {
 if (event.target.classList.contains("dropdown-input")) {
  closeAllDropdowns();

  const parent = event.target.closest(".input-field");
  const list = parent.querySelector(".suggestion-list");
  list.classList.add("active");
 }
});
