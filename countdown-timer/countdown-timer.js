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

function showYears() {
 const currentYear = new Date().getFullYear();
 const YEAR_LIMIT = 10;
 const ul = document.querySelector(".years-list");

 const fragment = document.createDocumentFragment();

 for (let i = 0; i < YEAR_LIMIT; i++) {
  const li = document.createElement("li");
  li.textContent = currentYear + i;
  fragment.appendChild(li);
 }

 ul.appendChild(fragment);
}
showYears();
