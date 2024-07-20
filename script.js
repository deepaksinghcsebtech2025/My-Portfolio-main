$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // Optimize Scroll Events:
    let debounceTimer;
$(window).scroll(function () {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    // Your scroll event logic here
  }, 100); // Adjust the delay as needed
});


    // Scroll up Button script start
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Scroll up Button script end

    // Fade In & Fade Out Elements on Scroll script start
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
      // Fade In & Fade Out Elements on Scroll script end
    });
  });

  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end

  // Typing animation script start
  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer","Web Developer", "Front End Developer","Backend Developer","UI-UX Designer","Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["Full Stack Developer","Web Developer", "Front End Developer","Backend Developer","UI-UX Designer","Coder"],
    
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // toggle menu/navbar script start
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // toggle menu/navbar script end

  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
  // Initialize EmailJS with your user ID
emailjs.init("ByuYpQFBN05opT-FO"); // Replace YOUR_USER_ID with your actual EmailJS user ID

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  // const formData = new FormData(this);
 

  // Send email using EmailJS
  emailjs.sendForm('service_2uyicni', 'template_ahhj90f', this)
    .then(function(response) {
      // console.log(formData)
      console.log('Success:', response);
      alert('Your message has been sent successfully!');
    }, function(error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    });
});

});
