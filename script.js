// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Contact Form Alert
document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting me! 😊");

    this.reset();

});
