//validation contact

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form.contact');

    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let errorMessages = [];

        if (name === '') {
            errorMessages.push("Full Name is required.");
        }

        if (email === '') {
            errorMessages.push("Email Address is required.");
        } else if (!emailPattern.test(email)) {
            errorMessages.push("Please enter a valid email address.");
        }

        if (subject === '') {
            errorMessages.push("Subject is required.");
        }

        if (message === '') {
            errorMessages.push("Message is required.");
        }

        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
            event.preventDefault(); // Stop form submission
        }
    });
});

//validation donation
document.addEventListener('DOMContentLoaded', function () {
    // Donation Form
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const amount = parseFloat(document.getElementById('amount').value);
            const payment = document.getElementById('payment').value;

            if (name === '') {
                alert('Please enter your name.');
                return;
            }

            if (email === '') {
                alert('Please enter your email.');
                return;
            }

            if (isNaN(amount) || amount < 5) {
                alert('Donation amount must be at least MYR 5.');
                return;
            }

            if (payment === '') {
                alert('Please select a payment method.');
                return;
            }

            alert('Thank you for your donation, ' + name + '!');
            donationForm.reset();
        });
    }
});

//slide show index
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}