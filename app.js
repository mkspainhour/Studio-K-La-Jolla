
let testimonialCollection = [
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
    attribution: "Jackston Kirkmichael, Customer"
  },
  {
    testimonial: `"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."`,
    attribution: "Coolio, Musician"
  },
  {
    testimonial: `"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
    attribution: "Randy Jackson, Bassist"
  }
];

const ui = {
  currentTestimonial: 0,

  $button_masthead: $("#masthead-content-button"),

  $pane_contact: $("#pane-contact"),

  $button_nextTestimonial: $("#testimonials-chevron"),
  $card_testimonials: $("#testimonials-card"),
  $text_testimonial: $("#js-testimonial-text"),
  $text_attribution: $("#js-testimonial-attribution")
}



$(entryPoint);

function entryPoint() {
  configureEventListeners();
}

function configureEventListeners() {
  ui.$button_nextTestimonial.on("click", showNextTestimonial);
  ui.$button_masthead.on("click", jumpToContactSection);
}

function showNextTestimonial() {
  if (ui.currentTestimonial == testimonialCollection.length-1) {
    ui.currentTestimonial = -1; //So that it can be bumped to the first item index, 0, in the next statement.
  }
  let newTestimonial = testimonialCollection[ui.currentTestimonial+1];

  ui.$card_testimonials.fadeOut(700, function() {
    ui.$text_testimonial.html(newTestimonial.testimonial);
    ui.$text_attribution.html(newTestimonial.attribution);
    ui.currentTestimonial++;
    ui.$card_testimonials.fadeIn(700);
  });
}

function jumpToContactSection() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: ui.$pane_contact.offset().top * 0.95
    },
    1500
  );
}