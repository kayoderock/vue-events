const events = document.getElementsByClassName('event');
[...events].forEach(event => {
  event.addEventListener('click', event => {
    console.log("Events clicked");

    /**
     * TODO
     * Do all logic to show currently selected item here.
    */

    window.location.href = "/#view-events-details";
  });
});

const closeModal = document.getElementById('modal__close');
closeModal.addEventListener('click', event => {
  window.location.href = "/#";
})