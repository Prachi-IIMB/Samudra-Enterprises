/**
 * Form Validation JavaScript for Samudra Engineers Contact Form
 * Author: Web Developer
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

/**
 * Validates the contact form fields
 * @param {Event} e - The form submit event
 */
function validateForm(e) {
    e.preventDefault();
    
    // Get form fields
    const nameField = document.getElementById('name');
    const phoneField = document.getElementById('phone');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const formStatus = document.getElementById('formStatus');
    
    // Reset previous error messages
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    
    // Flag to track validation status
    let isValid = true;
    
    // Validate Name (required)
    if (!nameField.value.trim()) {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    } else if (nameField.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate Phone (required, must be a valid format)
    if (!phoneField.value.trim()) {
        phoneError.textContent = 'Please enter your phone number';
        isValid = false;
    } else if (!isValidPhone(phoneField.value.trim())) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    }
    
    // Validate Email (required, must be a valid format)
    if (!emailField.value.trim()) {
        emailError.textContent = 'Please enter your email address';
        isValid = false;
    } else if (!isValidEmail(emailField.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // If form is valid, simulate form submission
    if (isValid) {
        // In a real implementation, you would send the data to a server here
        // For this example, we'll simulate a successful submission
        
        // Show success message
        formStatus.textContent = 'Thank you! Your message has been sent successfully. We will contact you shortly.';
        formStatus.className = 'form-status success';
        
        // Clear form fields
        contactForm.reset();
        
        // Scroll to the success message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Validates phone number format
 * Accepts various formats with or without country code
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidPhone(phone) {
    // Basic regex for phone validation
    // Accepts formats like: +91 1234567890, 1234567890, 123-456-7890
    const phoneRegex = /^(\+\d{1,3}\s?)?(\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;
    return phoneRegex.test(phone);
}

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
