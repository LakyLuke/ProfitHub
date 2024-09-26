document.addEventListener('DOMContentLoaded', function() {
  const categorySwitches = document.querySelectorAll('.category-switch');
  const gamesContainer = document.querySelector('.games-folder');
  let games = Array.from(gamesContainer.querySelectorAll('.game'));
  const searchInput = document.querySelector('.input-search');

  // Function to filter games based on selected categories
  const filterGames = () => {
    const selectedCategories = Array.from(categorySwitches)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id.replace('Switch', ''));

    games.forEach(game => {
      const categories = Array.from(game.querySelectorAll('.category p')).map(p => p.textContent.trim());
      const isVisible = selectedCategories.every(category => categories.includes(category));
      game.style.display = isVisible ? 'block' : 'none';
    });
  };

  // Event listener for category switches
  categorySwitches.forEach(checkbox => {
    checkbox.addEventListener('change', filterGames);
  });

  // Function to sort games alphabetically
  const sortGamesAZ = () => {
    sortGames((a, b) => a.title.localeCompare(b.title));
  };

  // Function to sort games reverse alphabetically
  const sortGamesZA = () => {
    sortGames((a, b) => b.title.localeCompare(a.title));
  };

  // Function to sort games by "New" badge
  const sortGamesNew = () => {
    games = Array.from(gamesContainer.querySelectorAll('.game'));
    games.sort((a, b) => {
      let isNewA = a.querySelector('.new') !== null;
      let isNewB = b.querySelector('.new') !== null;

      if (isNewA && !isNewB) return -1;
      if (!isNewA && isNewB) return 1;
      return a.title.localeCompare(b.title);
    });
    games.forEach(game => gamesContainer.appendChild(game));
  };

  // Function to sort games based on comparator function
  const sortGames = (comparator) => {
    games = Array.from(gamesContainer.querySelectorAll('.game'));
    games.sort((a, b) => comparator(getGameInfo(a), getGameInfo(b)));
    games.forEach(game => gamesContainer.appendChild(game));
  };

  // Function to extract game information from DOM element
  const getGameInfo = (gameElement) => {
    const title = gameElement.querySelector('h3').textContent.trim().toLowerCase();
    return { title };
  };

  // Event listeners for dropdown items
  document.getElementById('sortAZ').addEventListener('click', sortGamesAZ);
  document.getElementById('sortZA').addEventListener('click', sortGamesZA);
  document.getElementById('sortNew').addEventListener('click', sortGamesNew);

  // Event listener for search input
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    games.forEach(game => {
      const gameTitle = game.querySelector('h3').textContent.trim().toLowerCase();
      const isTitleMatch = gameTitle.includes(searchTerm);
      const isVisible = isTitleMatch;
      game.style.display = isVisible ? 'block' : 'none';
    });
  });



  // Initial call to filterGames to show all games
  filterGames();
});


function changeImg(icon) {

  var dropdown = document.getElementsByClassName('show');

  if (dropdown) {
    icon.classList.toggle('bi-chevron-bar-contract');
    icon.classList.toggle('bi-list');
  }

}


/////////////////////////////////////////////////////////


window.addEventListener("load", function() {
  const btn = document.getElementById("themeToggler");
  const html = document.querySelector("html");

  italianFunction();

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

function italianFunction() {
  const primoDiv = document.getElementById("primo-div");

  primoDiv.classList.remove("d-none");
  primoDiv.classList.add("d-block");

  const language_p = document.getElementById("language_p");
  language_p.innerText = "IT";

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
  const body = document.querySelector("body");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  html.setAttribute('data-bs-theme', 'dark');
  html.style.color = "white";
  main.style.color = "white";
  html.style.backgroundColor = "#000415";
  body.style.backgroundColor = "#000415";
  nav.style.backgroundColor = "#101a27";
  sun.classList.add("d-none");
  sun.classList.remove("d-block");
  moon.classList.add("d-block");
  moon.classList.remove("d-none");

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
  footer.style.color = "white";
  html.style.backgroundColor = "white";
  footer.style.backgroundColor = "#101a27";
  nav.style.backgroundColor = "white";
  body.style.backgroundColor = "white";
  sun.classList.add("d-block");
  sun.classList.remove("d-none");
  moon.classList.add("d-none");
  moon.classList.remove("d-block");

  localStorage.setItem("mode_theme", "light");
}