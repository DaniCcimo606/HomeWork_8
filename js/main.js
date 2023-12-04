if (document.title == 'bonus') {
    function DaniCcimo() {
        let spans = document.querySelectorAll('span'); // Мог сделать через split, но... мне было впадлу.........
        
        spans.forEach(item => {
            let randomTime = parseFloat(Math.random().toFixed(1));
        
            item.style.animation = `DaniCcimo ${randomTime}s infinite`;
        });
    }

    setInterval (DaniCcimo, 700);
}


if (document.title === 'index') {
    let lightningWrap = document.querySelector('.lightning-wrap');
    let isShow = true;

    function toggleLightning() {
        if (isShow) {
            lightningWrap.classList.remove('lightningShow');
            isShow = false;
        } else {
            lightningWrap.classList.add('lightningShow');
            isShow = true;
        }
    }

    setInterval(toggleLightning, 500);
}