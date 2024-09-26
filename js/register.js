window.addEventListener("load", function() {
  const btn = document.getElementById("themeToggler");
  const html = document.querySelector("html");
  const primoDiv = document.getElementById("primo-div");


  let language = localStorage.getItem("language");
  if (language === null) {
    language = primoDiv.getAttribute('class');
  }
  if (language === "d-block") {
    italianFunction();
  }
  else
    englishFunction();

  let mode_theme = localStorage.getItem("mode_theme");
  if (mode_theme === null) {
    mode_theme = html.getAttribute('data-bs-theme');
  }
  if (mode_theme === "dark")
    enableDarkMode();
  else
    enableLightMode();

  btn.addEventListener("click", checkHtmlMode);
});

//////////////////////////////////////////////////////////////////////
function italianFunction() {
  const primoDiv = document.getElementById("primo-div");
  const secondoDiv = document.getElementById("secondo-div");

  primoDiv.classList.remove("d-none");
  secondoDiv.classList.remove("d-block");
  primoDiv.classList.add("d-block");
  secondoDiv.classList.add("d-none");

  const language_p = document.getElementById("language_p");
  language_p.innerText = "IT";

  localStorage.setItem("language", "d-block");
}

function englishFunction() {
  const primoDiv = document.getElementById("primo-div");
  const secondoDiv = document.getElementById("secondo-div");

  primoDiv.classList.remove("d-block");
  secondoDiv.classList.remove("d-none");
  primoDiv.classList.add("d-none");
  secondoDiv.classList.add("d-block");

  const language_p = document.getElementById("language_p");
  language_p.innerText = "EN";

  localStorage.setItem("language", "d-none");
}

function checkHtmlMode() {
  const html = document.querySelector("html");
  if (html.getAttribute('data-bs-theme') == 'light')
    enableDarkMode();
  else
    enableLightMode();
}

function enableDarkMode() {
  const html = document.querySelector("html");
  const main = document.querySelector("main");
  const nav = document.querySelector("nav");
  const footer = document.querySelector("footer");
  const body = document.querySelector("body");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  html.setAttribute('data-bs-theme', 'dark');
  html.style.color = "white";
  main.style.color = "white";
  footer.style.color = "white";
  html.style.backgroundColor = "#000415";
  body.style.backgroundColor = "#000415";
  footer.style.backgroundColor = "#101a27";
  nav.style.backgroundColor = "#101a27";
  sun.classList.remove("d-block");
  sun.classList.add("d-none");
  moon.classList.remove("d-none");
  moon.classList.add("d-block");

  localStorage.setItem("mode_theme", "dark");
}

function enableLightMode() {
  const html = document.querySelector("html");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const body = document.querySelector("body");
  const nav = document.querySelector("nav");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  html.setAttribute('data-bs-theme', 'light');
  main.style.color = "black";
  html.style.color = "black";
  footer.style.color = "black";
  html.style.backgroundColor = "white";
  footer.style.backgroundColor = "white";
  nav.style.backgroundColor = "white";
  body.style.backgroundColor = "white";
  sun.classList.remove("d-none");
  sun.classList.add("d-block");
  moon.classList.remove("d-block");
  moon.classList.add("d-none");

  localStorage.setItem("mode_theme", "light");
}