class ToggleMobileMenu {
  constructor() {
    this.openIcon = document.querySelector('.mobile-header__bars');
    this.closeIcon = document.querySelector('.menu-overlay__close-icon');
    this.menuOverlay = document.querySelector('.menu-overlay');

    this.setEvents();
  }

  setEvents() {
    this.openIcon.onclick = () => {
      this.menuOverlay.classList.add('menu-overlay--visible');
      document.body.style.overflow = 'hidden';
    };

    this.closeIcon.onclick = () => {
      this.menuOverlay.classList.remove('menu-overlay--visible');
      document.body.style.overflow = 'initial';
    };
  }
}

new ToggleMobileMenu();
console.log('hello');
