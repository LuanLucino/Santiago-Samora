const perguntas = [
  {
    texto: "1. Você está atrasado para a missão e esqueceu o capacete. O que faz?",
    opcoes: {
      a: "Usa uma panela como substituto",
      b: "Consulta o Tenente antes de agir",
      c: "Finge que é parte do uniforme novo"
    },
    correta: "b"
  },
  {
    texto: "2. O rádio está chiando e você ouve “...ataque...pombo...”. Qual sua reação?",
    opcoes: {
      a: "Atira no pombo",
      b: "Espera o Tenente traduzir",
      c: "Se esconde atrás do cachorro"
    },
    correta: "b"
  },
  {
    texto: "3. O comandante te pede foco. Você responde:",
    opcoes: {
      a: "“Foco é pra quem não tem talento!”",
      b: "“Sim senhor!” e finge que entendeu",
      c: "“Tenente, o que é foco mesmo?”"
    },
    correta: "a"
  },
  {
    texto: "4. Durante a missão, você encontra um mapa. O que faz?",
    opcoes: {
      a: "Usa como toalha de rosto",
      b: "Entrega ao Tenente para análise",
      c: "Desenha um plano com lápis de cor"
    },
    correta: "b"
  },
  {
    texto: "5. Você precisa tomar uma decisão urgente. Quem você consulta?",
    opcoes: {
      a: "O Tenente",
      b: "O pombo da missão anterior",
      c: "Seu próprio instinto caótico"
    },
    correta: "a"
  }
];

let etapa = 0;
let acertos = 0;

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  const pergunta = perguntas[etapa];
  const p = document.createElement("p");
  p.textContent = pergunta.texto;
  container.appendChild(p);

  for (let letra in pergunta.opcoes) {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="resposta" value="${letra}"> ${pergunta.opcoes[letra]}`;
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  const selecionada = document.querySelector('input[name="resposta"]:checked');
  if (!selecionada) return;

  if (selecionada.value === perguntas[etapa].correta) {
    acertos++;
  }

  etapa++;

  if (etapa < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";

    const resultado = document.getElementById("resultado");
    if (acertos === 5) {
      resultado.textContent = "✅ Tenente te condecorou! Você é oficial da Tropa Samora.";
    } else if (acertos >= 3) {
      resultado.textContent = "🟡 Aprovado com ressalvas. O Tenente está de olho...";
    } else {
      resultado.textContent = "❌ Reprovado! Vai treinar com o pombo da missão anterior.";
    }
  }
});

// Iniciar quiz
mostrarPergunta();