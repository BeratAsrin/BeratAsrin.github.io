// Daktilo efekti için basit bir typewriter fonksiyonu
function setImageBlur(progress) {
    var profileImg = document.querySelector('.profile-image img');
    if (profileImg) {
        // Blur miktarını 4px'den 0px'e indir
        var blurValue = 4 - 4 * progress;
        if (blurValue < 0) blurValue = 0;
        profileImg.style.filter = `blur(${blurValue}px)`;
    }
}

function typeWriter(element, text, speed = 40, callback, onProgress) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            if (onProgress) {
                onProgress(i / text.length);
            }
            setTimeout(typing, speed);
        } else {
            if (onProgress) onProgress(1);
            if (callback) callback();
        }
    }
    typing();
}

document.addEventListener('DOMContentLoaded', function() {
    // H1 için daktilo efekti
    const h1 = document.querySelector('.profile-summary h1');
    const h1Text = h1.textContent;
    h1.textContent = '';
    // Paragraf için daktilo efekti
    const p = document.querySelector('.profile-summary p');
    const pText = p.textContent;
    p.textContent = '';

    // Başlık yazılırken blur azalsın
    typeWriter(h1, h1Text, 30, function() {
        setImageBlur(1); // Tamamlandığında blur tamamen kalksın
        setTimeout(function() {
            typeWriter(p, pText, 10, undefined, undefined);
        }, 300);
    }, setImageBlur);
});
