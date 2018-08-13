
let testimonialCollection = [
  {
    testimonial: "Nice.",
    attribution: "Jackston Kirkmichael, Customer"
  },
  {
    testimonial: "Very nice.",
    attribution: "Coolio, Musician"
  },
  {
    testimonial: "It's going to have to be a yes from me, dawg.",
    attribution: "Randy Jackson, Bassist"
  }
];

const ui = {
  currentTestimonial: 0,

  $button_nextTestimonial: $("#testimonials-chevron"),
  $card_testimonials: $("#testimonials-card")
}



$(configureEventListeners);

function configureEventListeners() {
  ui.$button_nextTestimonial.on("click", function(event) {
    showNextTestimonial();
  });
}

function showNextTestimonial() {
  console.log("Showing next testimonial...");
  //Functionality goes here...
}