(() => {
  const refs = {
    openMenulBtn: document.querySelector('.button-open'),
    closeMenulBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mob-mebu'),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
      document.body.classList.toggle("menu-open");
    refs.menu.classList.toggle("is-hidden");
    }
    
})();