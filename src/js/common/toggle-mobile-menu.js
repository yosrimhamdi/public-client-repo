class ToggleMobileMenu {
  constructor() {
    this.openIcon = document.querySelector('.mobile-header__bars');
    this.blurArea = document.querySelector('.menu-overlay__blur-area');
    this.menuOverlay = document.querySelector('.menu-overlay');

    this.setEvents();
  }

  setEvents() {
    this.openIcon.onclick = () => {
      this.menuOverlay.classList.add('menu-overlay--visible');
      document.body.style.overflow = 'hidden';
    };

    this.blurArea.onclick = () => {
      this.menuOverlay.classList.remove('menu-overlay--visible');
      document.body.style.overflow = 'initial';
    };
  }
}

new ToggleMobileMenu();
