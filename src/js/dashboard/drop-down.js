class DropDown {
  constructor() {
    this.userIcon = document.querySelector('#user-icon');
    this.dropDown = document.querySelector('.drop-down');

    this.toggleDropDown();
    this.hideDropDown();
  }

  toggleDropDown() {
    this.userIcon.onclick = () => {
      this.dropDown.classList.toggle('drop-down--visible');
    };
  }

  hideDropDown() {
    this.dropDown.addEventListener('mouseleave', () => {
      this.onMouseLeave();
    });

    this.dropDown.addEventListener('click', () => {
      this.onMouseLeave();
    });
  }

  onMouseLeave() {
    this.dropDown.classList.remove('drop-down--visible');
  }
}

new DropDown();
