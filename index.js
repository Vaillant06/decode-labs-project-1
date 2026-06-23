
const visitButton = document.getElementById("visit")
visitButton.addEventListener("click", ()=> {
    alert("Please fill the Contact Form for further details");
});

const button = document.getElementById("hero-btn");
button.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({behaviour: "smooth"});4
});

const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! We will contact you soon.");
});