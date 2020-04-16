document.querySelectorAll('.dropdown a').forEach(item => {
    item.addEventListener('click', function(evt) {
        evt.currentTarget.parentNode.querySelector('.submenu').classList.toggle('show');
        evt.querySelector('i').classList.add('fa-rotate-180');
    })
})

// Close and open mobile sidebar
document.querySelector('.close-mobile-nav').addEventListener('click', function(evt) {
    console.log('clicked close')
    document.querySelector('.side-nav').classList.remove('show')
})
document.querySelector('.open-mobile-nav').addEventListener('click', function(evt) {
    console.log('clicked')
    document.querySelector('.side-nav').classList.add('show')
})