// Substitua o evento antigo:
document.getElementById('play-music-btn').addEventListener('click', function() {
    document.getElementById('overlay-botao').style.display = 'none';
    document.getElementById('overlay-suspense').style.display = 'flex';
    // Inicia a música já aqui para dar tempo de carregar
    document.getElementById('background-music').play();
});

// Novo evento para o botão "Sim, quero!"
document.getElementById('confirmar-btn').addEventListener('click', function() {
    document.getElementById('overlay-suspense').style.display = 'none';
    document.getElementById('conteudo-site').style.display = 'block';
    // Aqui você pode adicionar corações ou outros efeitos se quiser
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

    // Efeito de corações subindo
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            criarCoracao();
        }, i * 150);
    }


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
// Contador de dias juntos
function atualizarContadorDias() {
    // Data do início do namoro (ano, mês-1, dia)
    const inicio = new Date(2024, 8, 4); // 4 de setembro de 2024 (mês começa do zero)
    const hoje = new Date();
    // Zera as horas para não dar diferença por horário
    inicio.setHours(0,0,0,0);
    hoje.setHours(0,0,0,0);
    const diff = hoje - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('contador-dias').innerHTML =
        `<span class="dias-juntos">Estamos juntos há <strong>${dias}</strong> dias! 🥰</span>`;
}
atualizarContadorDias();// Contador de dias juntos
function atualizarContadorDias() {
    // Data do início do namoro (ano, mês-1, dia)
    const inicio = new Date(2024, 8, 4); // 4 de setembro de 2024 (mês começa do zero)
    const hoje = new Date();
    // Zera as horas para não dar diferença por horário
    inicio.setHours(0,0,0,0);
    hoje.setHours(0,0,0,0);
    const diff = hoje - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('contador-dias').innerHTML =
        `<span class="dias-juntos">Estamos juntos há <strong>${dias}</strong> dias! 🥰</span>`;
}
atualizarContadorDias();
