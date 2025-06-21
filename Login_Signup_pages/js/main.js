document.addEventListener('DOMContentLoaded', () => {
    console.log('Freelancer Hub loaded');
    const buttons = document.querySelectorAll('.cta, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Feature coming soon!');
        });
    });
});