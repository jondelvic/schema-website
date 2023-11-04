const primaryHeader = document.querySelector('.primary-header')
const scrollDetector = document.createElement('div');

scrollDetector.setAttribute('data-scroll-detector', '');
primaryHeader.before(scrollDetector);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('fixed', !entries[0].isIntersecting)
});

navObserver.observe(scrollDetector);