const ui = {
  $form_contact: $("#form-contact"),
}



$(entryPoint);

function entryPoint() {
  configureEventListeners();
}

function configureEventListeners() {
  ui.$form_contact.on("submit", function(event) {
    console.log("Form submit triggered.");
  });
}