// EmailJS
const contactForm = document.querySelector( "#contact-form" );
const submitBtn = document.querySelector( ".submit-btn" );
const nameInput = document.querySelector( "#user_name" );
const surnameInput = document.querySelector( "#user_surname" );
const emailInput = document.querySelector( "#user_email" );
const messageInput = document.querySelector( "#message" );

// -- Get needed data from EmailJS
const publicKey = "7kT54yfWi3EZlsv4M";
const serviceID = "service_1jhn2o3";
const templateID = "template_e9hc5e7";

// -- Initialize email JS with public key
emailjs.init( publicKey );

// -- Add submit event to the form
contactForm.addEventListener( "submit", e => {
    // Prevent form default behaviour
    e.preventDefault();
    // Change button text
    submitBtn.innerText = "Just a moment...";
    // Get all input field values
    const inputFields = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    // Send the email (add service, template ID and input field values)
    emailjs.send( serviceID, templateID, inputFields ).then( () => {
        // Change button text
        submitBtn.innerText = "Message sent successfully!";
        // Clear out all input fields
        nameInput.value = "";
        surnameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    } ), ( error ) => {
        //Console log the error
        console.log( error );
        // Change button text
        submitBtn.innerText = "Ups, something went wrong...";
    };
} );