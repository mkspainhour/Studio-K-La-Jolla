const ui = {
  $form_contact: $("#form-contact"),
  $button_nextTestimonial: $("#testimonials-chevron"),
  $card_testimonials: $("#testimonials-card"),
  $wrapper_testimonialsCardContent: $("#testimonials-card-content"),
  $text_testimonial: $("#testimonial-text"),
  $text_testimonialAttribution: $("#testimonial-attribution")
}



$(entryPoint);

function entryPoint() {
  configureEventListeners();
}

function configureEventListeners() {
  ui.$form_contact.on("submit", function() {
    console.log("Form submit triggered.");
  });
  ui.$button_nextTestimonial.on("click", function(event) {
    //showNextTestimonial();
  });
}

let currentTestimonial = 1;
function showNextTestimonial() {
  ui.$card_testimonials.css("min-width", ui.$card_testimonials.outerWidth())
  ui.$card_testimonials.css("min-height", ui.$card_testimonials.outerHeight());
  ui.$card_testimonials.children().fadeOut(500);
}