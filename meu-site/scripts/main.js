// Overlay inicial
document.getElementById('play-music-btn').addEventListener('click', function() {
    document.getElementById('overlay-botao').style.display = 'none';
    document.getElementById('overlay-suspense').style.display = 'flex';
    document.getElementById('background-music').play();
});

// Suspense
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
    let newTop = Math.random() * 30;
    naoBtn.style.position = 'relative';
    naoBtn.style.left = newLeft + 'px';
    naoBtn.style.top = newTop + 'px';
});
botoesSuspense.addEventListener('mouseleave', function() {
    naoBtn.style.left = '0px';
    naoBtn.style.top = '0px';
});

// Contador de dias juntos
function atualizarContadorDias() {
    const inicio = new Date(2024, 8, 4);
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
        e.preventDefault();
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

document.addEventListener('DOMContentLoaded', function() {
    // Envelopes e botões
    const envelopes = document.querySelectorAll('.envelope-bilhete');
    const abrirBtns = document.querySelectorAll('.abrir-proximo-btn');
    const fecharBtns = document.querySelectorAll('.fechar-envelope-btn');
    const envelopeFinal = document.getElementById('envelope-final');
    const fecharFinalBtn = document.getElementById('fechar-envelope-final-btn');
    const reabrirBtn = document.getElementById('reabrir-envelopes-btn');

    // Quiz
    const quizDiv = document.getElementById('quiz-envelope');
    const enviarQuizBtn = document.getElementById('enviar-quiz-btn');
    const respostaQuiz = document.getElementById('resposta-quiz');
    const quizFeedback = document.getElementById('quiz-feedback');
    const dicaBtn = document.getElementById('dica-quiz-btn');
    const dicaTexto = document.getElementById('dica-quiz-texto');
    let dicaTimer;

    // Controle dos envelopes
    abrirBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            envelopes[idx].style.display = 'none';
            if (envelopes[idx + 1]) {
                envelopes[idx + 1].style.display = 'flex';
            } else {
                // Mostra o quiz
                quizDiv.style.display = 'flex';
                // Esconde dica e botão, inicia timer
                dicaBtn.style.display = 'none';
                dicaTexto.style.display = 'none';
                if (dicaTimer) clearTimeout(dicaTimer);
                dicaTimer = setTimeout(() => {
                    dicaBtn.style.display = 'inline-block';
                }, 60000); // 60 segundos
            }
        });
    });

    fecharBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            envelopes[idx].style.display = 'none';
            reabrirBtn.style.display = 'block';
        });
    });

    if (fecharFinalBtn) {
        fecharFinalBtn.addEventListener('click', () => {
            envelopeFinal.style.display = 'none';
            reabrirBtn.style.display = 'block';
        });
    }

    if (reabrirBtn) {
        reabrirBtn.addEventListener('click', () => {
            envelopeFinal.style.display = 'none';
            quizDiv.style.display = 'none';
            envelopes.forEach((env, i) => {
                env.style.display = i === 0 ? 'flex' : 'none';
            });
            reabrirBtn.style.display = 'none';
        });
    }

    // Botão de dica
    if (dicaBtn) {
        dicaBtn.onclick = function() {
            dicaTexto.textContent = "Dica: O mês é janeiro e o dia é 24 😉";
            dicaTexto.style.display = 'block';
            dicaBtn.style.display = 'none';
        };
    }

    // Lógica do quiz
    if (enviarQuizBtn) {
        enviarQuizBtn.onclick = function() {
            // Resposta correta (ajuste para sua data!)
            const respostaCerta = "24/01/2024";
            if (respostaQuiz.value.trim() === respostaCerta) {
                quizFeedback.textContent = "Acertou! 💖";
                setTimeout(() => {
                    quizDiv.style.display = 'none';
                    envelopeFinal.style.display = 'flex';
                    soltarCoracoesConfete();
                    respostaQuiz.value = '';
                    quizFeedback.textContent = '';
                }, 800);
            } else {
                quizFeedback.textContent = "Errou! 😱";
                setTimeout(() => {
                    window.location.reload();
                }, 1200);
            }
        };
    }

    // Função corações confete
    function soltarCoracoesConfete(qtd = 24) {
        const container = document.getElementById('coracoes-confete');
        if (!container) return;
        container.innerHTML = '';
        const emojis = ['💗','💖','💘','💝','💞','❤️','💕'];
        for (let i = 0; i < qtd; i++) {
            const coracao = document.createElement('span');
            coracao.className = 'coracao-confete';
            coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            coracao.style.left = Math.random() * 96 + 'vw';
            coracao.style.fontSize = (1.6 + Math.random() * 1.8) + 'rem';
            coracao.style.animationDelay = (Math.random() * 0.8) + 's';
            container.appendChild(coracao);
            setTimeout(() => coracao.remove(), 3200);
        }
    }
});