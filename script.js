const modal = {
  show(id) {
    const modal = document.getElementById(id);
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

