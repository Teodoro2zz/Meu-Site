// Overlay inicial: ao clicar no botão, mostra suspense e toca música
document.getElementById('play-music-btn').addEventListener('click', function() {
    document.getElementById('overlay-botao').style.display = 'none';
    document.getElementById('overlay-suspense').style.display = 'flex';
    document.getElementById('background-music').play();
});

// Botão "Sim, quero!" mostra o conteúdo principal
document.getElementById('confirmar-btn').addEventListener('click', function() {
    document.getElementById('overlay-suspense').style.display = 'none';
    document.getElementById('conteudo-site').style.display = 'block';
});

// Botão "Não" foge do mouse
const naoBtn = document.getElementById('nao-btn');
const botoesSuspense = document.querySelector('.botoes-suspense');

naoBtn.addEventListener('mouseenter', function() {
    const box = botoesSuspense.getBoundingClientRect();
    const btn = naoBtn.getBoundingClientRect();
    let newLeft = Math.random() * (box.width - btn.width);
    let newTop = Math.random() * 30; // Pequeno deslocamento vertical

    naoBtn.style.position = 'relative';
    naoBtn.style.left = newLeft + 'px';
    naoBtn.style.top = newTop + 'px';
});

// Volta ao lugar quando o mouse sai da área dos botões
botoesSuspense.addEventListener('mouseleave', function() {
    naoBtn.style.left = '0px';
    naoBtn.style.top = '0px';
});

// Contador de dias juntos
function atualizarContadorDias() {
    // Data do início do namoro (ano, mês-1, dia)
    const inicio = new Date(2024, 8, 4); // 4 de setembro de 2024 (mês começa do zero)
    const hoje = new Date();
    inicio.setHours(0,0,0,0);
    hoje.setHours(0,0,0,0);
    const diff = hoje - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('contador-dias').innerHTML =
        `<span class="dias-juntos">Estamos juntos há <strong>${dias}</strong> dias! 🥰</span>`;
}
atualizarContadorDias();

// Lightbox para galeria de fotos
document.querySelectorAll('.foto-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede sair do site!
        document.getElementById('img-lightbox').src = this.href;
        document.getElementById('lightbox').style.display = 'flex';
    });
});
document.getElementById('fechar-lightbox').onclick = function() {
    document.getElementById('lightbox').style.display = 'none';
};
document.getElementById('lightbox').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
};