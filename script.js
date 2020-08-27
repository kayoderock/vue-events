const modal = {
  isModalNonDialog: false,
  makeModalNonDialog(modal) {
    modal.addEventListener('click', event => {
      this.isModalNonDialog = true;
      if (event.target === modal) modal.classList.remove("modal--show");
    });
  },
  show(id) {
    const modal = document.getElementById(id);
    if (!this.isModalNonDialog) this.makeModalNonDialog(modal);
    modal.classList.add("modal--show");
  },
  hide(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("modal--show");
  }
}

const events = document.getElementsByClassName('event');
[...events].forEach(event => {
  event.addEventListener('click', event => {
    console.log("Events clicked");

    /**
     * TODO
     * Do all logic to show currently selected item here.
    */

    modal.show("view-events-details");
  });
});

const closeModal = document.getElementById('modal__close');
closeModal.addEventListener('click', event => {
  modal.hide("view-events-details");
});

