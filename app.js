const ui = {
  $form_contact: $("#form-contact"),
}



$(configureEventListeners);

function configureEventListeners() {
  ui.$form_contact.on("submit", function(event) {
    event.preventDefault();
    //Button clicked behavior...
  });
}