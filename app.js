setTimeout(() => {
    let newsletter_container = document.getElementById('newsletter-popup-container');
    newsletter_container.style.display = 'flex'
    let newsletter_opacity = 0

    let fade_in_interval = setInterval(function() {
        newsletter_opacity += 0.05
        newsletter_container.style.opacity = newsletter_opacity
        if (parseInt(newsletter_opacity) == 1) {
            clearInterval(fade_in_interval)
        }
    }, 100)
}, 2000)

let close_newsletter_button = document.querySelector('.newsletter-popup-container span.close');
close_newsletter_button.addEventListener('click', function(evt) {
    let newsletter_container = document.querySelector('#newsletter-popup-container');
    let width = window.getComputedStyle(newsletter_container).getPropertyValue('width').replace('px', '');
    console.log(width)
    width = parseInt(width)
    let close_interval = setInterval(function() {
        width -= 10;
        newsletter_container.style.width = `${width}px`;
        if (width < 0) {
            newsletter_container.style.overflow = 'hidden'
            clearInterval(close_interval)
        }
    }, 0.05);
})

// SIGN UP
document.querySelector('#signup-form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    this.style.display = 'none';
    document.querySelector('#login-form').style.display = 'block'
})