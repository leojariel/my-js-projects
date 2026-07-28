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

function showDays() {
 const container = document.getElementById("days-row");

 const now = new Date();
 const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

 let html = "";

 for (let day = 1; day <= totalDays; day++) {
  if ((day - 1) % 10 === 0) {
   if (day > 1) html += `</ul></td>`;
   html += `<td><ul>`;
  }

  const formattedDay = String(day).padStart(2, "0");
  html += `<li>${formattedDay}</li>`;
 }

 html += `</ul></td>`;

 container.innerHTML = html;
}

function showHour() {
 const container = document.getElementById("hour-list");

 let html = "";

 for (let i = 0; i < 24; i++) {
  if (i % 10 === 0) {
   if (i > 0) html += `</ul></td>`;
   html += `<td><ul>`;
  }

  const formattedHour = String(i).padStart(2, "0");
  html += `<li>${formattedHour}</li>`;
 }

 html += `</ul></td>`;
 container.innerHTML = html;
}

function showMMandSS() {
 const containers = document.querySelectorAll(".mmAndSs-list");

 let html = "";

 for (let minute = 0; minute < 60; minute++) {
  if (minute % 10 === 0) {
   if (minute > 1) html += `</ul></td>`;
   html += `<td><ul>`;
  }

  const formattedMinute = String(minute).padStart(2, "0");
  html += `<li>${formattedMinute}</li>`;
 }

 html += `</ul></td>`;
 containers.forEach((container) => (container.innerHTML = html));
}

showMMandSS();
showHour();
showYears();
showDays();
