$(document).on("scroll", function(){
    if($(document).scrollTop() > 86)
    {
      $("#navbar").addClass("sticky");
      $("#nav-logo").addClass("color-white");
      $(".nav-custom-link").addClass("color-white");
      $(".navbar-btn").addClass("nav-btn-icon");
    }
    else
    {
        $("#navbar").removeClass("sticky");
        $("#nav-logo").removeClass("color-white");
        $(".nav-custom-link").removeClass("color-white");
        $(".navbar-btn").removeClass("nav-btn-icon");
    }
});

function openInNewPage(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const root = document.documentElement;
  const themeToggleButton = document.querySelector('.tdnn');

  // Function to toggle the theme and save the state to localStorage
  function toggleTheme() {
    root.classList.toggle('dark-theme');
    const moonElement = document.querySelector('.moon');
    moonElement.classList.toggle('sun');

    themeToggleButton.classList.toggle('day');

    const isDarkMode = root.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
  }

  // Function to load the dark mode state from localStorage
  function loadDarkModeState() {
    const darkModeState = localStorage.getItem('darkMode');
    if (darkModeState === 'true') {
      root.classList.add('dark-theme');
      const moonElement = document.querySelector('.moon');
      moonElement.classList.add('sun');
      themeToggleButton.classList.add('day');
    }
  }

  // Load the dark mode state when the page is ready
  loadDarkModeState();

  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleTheme();
  });
});
