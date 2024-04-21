document.querySelector('.search-icon').addEventListener('click', function() {
    var searchBox = document.querySelector('.search-box');
    if (searchBox.style.width === '200px') {
        searchBox.style.width = '0';
    } else {
        searchBox.style.width = '200px';
    }
});
document.querySelectorAll('.container .gallery img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = "block";
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = "none";
}