function animation() {
    let spans = document.querySelectorAll('span'); // Мог сделать через split, но... мне было впадлу.........
    
    spans.forEach(item => {
        let randomTime = parseFloat(Math.random().toFixed(1));
    
        item.style.animation = `DaniCcimo ${randomTime}s infinite`;
    });
}

setInterval (animation, 700)