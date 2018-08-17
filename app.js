
// Can be expanded with any number of additional testimonials
let testimonialCollection = [
  {
    testimonial: `"As someone who has spent his life time obsessed with improving, healing, and strengthening my body and mind, Kurt is without a doubt the "trainer" I have had the most fulfilling and longest working relationship. His profound and varied knowledge base is almost secondary to his intuitive skills that begin with how to make someone feel comfortable enough to move and extends to knowing how to deeply impact bodily change. He managed to do all this in an easy going and playful manner that caused me to cherish those times in the week when we could work together. New York's loss is San Diego's gain."`,
    attribution: "S. Ball, Ph.D."
  },
  {
    testimonial: `"I had my ACLs in both knees replaced, and my physical therapy ended, but I am a dancer and didn't feel ready to start dancing again. So, I started taking private Pilates and Gyrotonic sessions with Kurt. I began to strengthen my body in a gentle yet incredibly effective way. The results were amazing on my body and my psyche. I was able to trust my body again, and I feel stronger now than I did pre-surgery. I'm back in dance class, and feeling better than ever."`,
    attribution: "K. Newman, Professional Dancer"
  },
  {
    testimonial: `"As a client of Kurt’s, I can attest that it was a most gratifying and healthful experience. His knowledge of the practices of Gyrotonic and Pilates is profound and his personal manner is delightful and professional. I cannot imagine a better or more qualified practitioner of these arts which require such skill and personality than Kurt."`,
    attribution: "W. Wegman, Artist"
  }
];

const ui = {
  currentTestimonial: 0,

  $button_masthead: $("#masthead-content-button"),

  $pane_contact: $("#pane-contact"),
  
  $card_testimonials: $("#testimonials-card"),
  $text_testimonial: $("#js-testimonial-text"),
  $text_attribution: $("#js-testimonial-attribution"),
  $button_nextTestimonial: $("#testimonials-chevron")
}



$(entryPoint);
function entryPoint() {
  configureEventListeners();
}


function configureEventListeners() {
  ui.$button_masthead.on("click", jumpToContactSection);
  ui.$button_nextTestimonial.on("click", showNextTestimonial);
}

function jumpToContactSection() {
  $( [document.documentElement, document.body] ).animate(
    {
      scrollTop: ui.$pane_contact.offset().top * 0.95 //The y-axis position of the top of the element, less 5%
    },
    1500);
}

function showNextTestimonial() {
  if (ui.currentTestimonial == testimonialCollection.length-1) {
    ui.currentTestimonial = -1; //So that it can be bumped to the first item index (0) in the next statement.
  }
  let newTestimonial = testimonialCollection[ui.currentTestimonial+1];
  console.log(newTestimonial);

  ui.$card_testimonials.fadeOut(700, function() {
    ui.$text_testimonial.html(newTestimonial.testimonial);
    ui.$text_attribution.html(newTestimonial.attribution);
    ui.currentTestimonial++;
    ui.$card_testimonials.fadeIn(700);
  });
}