function irPara(id) {
  document.querySelectorAll(".tela").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Exibe tela inicial ao carregar
window.onload = () => {
  irPara("inicio");
};

// Música
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");

function toggleMusica() {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = "⏸️";
  } else {
    musica.pause();
    btnMusica.textContent = "▶️";
  }
}


// ===== ABRIR PRESENTE E IR PARA A BOAS-VINDAS =====
function abrirPresente() {
    const presente = document.querySelector('.presente');
    presente.style.transform = 'scale(0.9) rotateX(30deg)';
    setTimeout(() => {
        mostrarTela('boasVindas');
    }, 1500);
}


function abrirPresente() {
    const tela = document.getElementById("telaPresente");
    tela.style.transition = "opacity 1.2s ease";
    tela.style.opacity = 0;
    setTimeout(() => {
        tela.style.display = "none";
        mostrarTela('boasVindas');
    }, 1200);
}
