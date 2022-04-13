class ToggleMobileMenu {
  constructor() {
    this.openIcon = document.querySelector('.mobile-header__bars');
    this.blurArea = document.querySelector(
      '.mobile-side-bar-overlay__blur-area'
    );
    this.menuOverlay = document.querySelector('.mobile-side-bar-overlay');

    this.setEvents();
  }

  setEvents() {
    this.openIcon.onclick = () => {
      this.menuOverlay.classList.add('mobile-side-bar-overlay--visible');
      document.body.style.overflow = 'hidden';
    };

    this.blurArea.onclick = () => {
      this.menuOverlay.classList.remove('mobile-side-bar-overlay--visible');
      document.body.style.overflow = 'initial';
    };
  }
}

new ToggleMobileMenu();
