(() => {
  const refs = {
    openMenulBtn: document.querySelector('.menu-open'),
    closeMenulBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mob-mebu'),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();