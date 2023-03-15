exports.shrinkNavOnScroll=function(){
  var navbar = document.querySelector('.navbar');
  var navbarLogo = document.querySelector('#navbarLogo');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 80) { /* adjust the scroll position as needed */
      navbar.classList.add('shrink');
      navbarLogo.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
      navbarLogo.classList.remove('shrink');
    }
  });
}

exports.changeOnClick=function() {
  const searchInput = document.querySelector('#searchInput');
  var searchIcon = document.querySelector('#searchIcon');

  searchInput.addEventListener('click', () => {
    searchInput.focus();
    searchIcon.classList.add('focus');
  });

  searchInput.addEventListener("blur", function() {
    searchIcon.classList.remove('focus');
  });
}
