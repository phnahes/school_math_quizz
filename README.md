# 📐 School Math Quizz

Um quiz de matemática simples, escrito em HTML, CSS e JavaScript puro. O projeto sorteia 5 perguntas aleatórias de um conjunto de 20, com múltiplas escolhas, focando em lógica e raciocínio matemático.

---

## 🚀 Como usar

1. **Abra o arquivo `index.html` no navegador**

> Nenhum servidor local é necessário. Todo o conteúdo está embutido (inclusive as questões), então você pode abrir diretamente com duplo clique ou com um live server.

Disponivel em: https://phnahes.github.io/school_math_quizz/

---

## 🧠 Como funciona

- As questões estão em `questions.js`, num array JavaScript embutido.
- Ao carregar a página:
  - O script embaralha as 20 questões.
  - Seleciona 5 delas aleatoriamente.
  - Renderiza no HTML dinamicamente.
- Quando o botão "Enviar Respostas" é clicado:
  - O script verifica quais respostas foram marcadas.
  - Compara com a resposta correta.
  - Exibe o total de acertos.

---

## 📁 Estrutura

```
school_math_quizz/
├── index.html       # Página principal do quiz
├── questions.js     # Banco de questões com respostas
└── README.md        # Este arquivo
```

---

## ✏️ Exemplo de questão

```js
{
  question: "Quanto é 7 x 8?",
  choices: ["56", "54", "48", "64"],
  answer: "56"
}
```

---

## 🧪 Teste rápido
Você pode recarregar a página para ver 5 novas questões sorteadas aleatoriamente de um total de 20.

---

