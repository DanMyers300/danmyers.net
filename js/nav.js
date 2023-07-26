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

  function toggleTheme() {
    root.classList.toggle('dark-theme');
  }

  themeToggleButton.addEventListener('click', () => {
    const moonElement = document.querySelector('.moon');
    moonElement.classList.toggle('sun');
    themeToggleButton.classList.toggle('day');
    document.body.classList.toggle('light');
    toggleTheme();
  });
});

