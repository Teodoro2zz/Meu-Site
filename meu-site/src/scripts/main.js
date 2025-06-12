document.getElementById('play-music-btn').addEventListener('click', function() {
    document.getElementById('background-music').play();
    document.getElementById('overlay-botao').style.display = 'none';
    document.getElementById('conteudo-site').style.display = 'block';

    // Efeito de corações subindo
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            criarCoracao();
        }, i * 150);
    }
});

function criarCoracao() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.fontSize = (2 + Math.random() * 2) + 'rem';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}