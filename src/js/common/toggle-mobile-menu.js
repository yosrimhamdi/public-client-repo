class ToggleMobileMenu {
  constructor(open, overlay) {
    this.openIcon = document.querySelector(open);
    this.blurArea = document.querySelector(
      `${overlay} .mobile-side-bar-overlay__blur-area`
    );
    this.menuOverlay = document.querySelector(overlay);

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

export default ToggleMobileMenu;
