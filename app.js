
// TODO: Make sure the marquee testimonials are hard-coded into the HTML as a <noscript> fallback.
// TODO: Set testimonial wrapper height to fit the largest testimonial at largest width breakpoint.
// TODO: Set testimonials.

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

  $button_nextTestimonial: $("#testimonials-chevron"),
  $wrapper_testimonial: $("#testimonials-card-content-wrapper"),
  $text_testimonial: $("#js-testimonial-text"),
  $text_attribution: $("#js-testimonial-attribution")
}



$(configureEventListeners);

function configureEventListeners() {
  ui.$button_nextTestimonial.on("click", function(event) {
    showNextTestimonial();
  });
}

function showNextTestimonial() {
  if (ui.currentTestimonial == testimonialCollection.length-1) {
    ui.currentTestimonial = -1; //So that it can be bumped to the first item index, 0, in the next statement.
  }
  let newTestimonial = testimonialCollection[ui.currentTestimonial+1];

  ui.$wrapper_testimonial.fadeOut(500, function() {
    ui.$text_testimonial.html(newTestimonial.testimonial);
    ui.$text_attribution.html(newTestimonial.attribution);
    ui.currentTestimonial++;
    ui.$wrapper_testimonial.fadeIn(500);
  });
}