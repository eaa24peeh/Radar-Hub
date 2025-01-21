// Newsletter form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            const inputGroup = this.querySelector('.newsletter-input-group');
            const successMessage = this.querySelector('.newsletter-success');
            const submitButton = this.querySelector('.newsletter-submit');
            
            // Add success state to button
            submitButton.classList.add('success');
            
            // Fade out input group and fade in success message
            inputGroup.style.opacity = '0';
            setTimeout(() => {
                inputGroup.classList.add('hidden');
                successMessage.classList.remove('hidden');
                setTimeout(() => {
                    successMessage.classList.add('show');
                }, 50);
            }, 300);
        });
    }
}); 