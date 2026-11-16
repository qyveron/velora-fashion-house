// WhatsApp Contact
const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = "91XXXXXXXXXX";

    const message = "Hello VELORA Boutique! I am interested in your fashion collections. Please share more details.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});

// Smooth reveal animation
const revealElements = document.querySelectorAll(
    ".collection-card, .intro, .contact, .banner"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});