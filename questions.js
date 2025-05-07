const questions = [
  {
    question: "Qual é o próximo número da sequência: 2, 4, 8, 16, ?",
    choices: ["18", "24", "32", "20"],
    answer: "32"
  },
  {
    question: "Quanto é 7 x 8?",
    choices: ["56", "54", "48", "64"],
    answer: "56"
  },
  {
    question: "Se João tem 5 maçãs e dá 2, com quantas fica?",
    choices: ["2", "3", "5", "7"],
    answer: "3"
  },
  {
    question: "Qual é a raiz quadrada de 81?",
    choices: ["7", "8", "9", "10"],
    answer: "9"
  },
  {
    question: "Resolva: 12 + (4 × 3)",
    choices: ["24", "20", "18", "16"],
    answer: "24"
  },
  {
    question: "Qual é o valor de 2³?",
    choices: ["6", "8", "9", "4"],
    answer: "8"
  },
  {
    question: "Quanto é 100 dividido por 4?",
    choices: ["25", "20", "30", "40"],
    answer: "25"
  },
  {
    question: "Qual é o menor número primo?",
    choices: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    question: "Quanto é 9²?",
    choices: ["81", "72", "90", "99"],
    answer: "81"
  },
  {
    question: "Se um carro anda 60km em 1 hora, quantos km ele percorre em 3 horas?",
    choices: ["120", "150", "180", "200"],
    answer: "180"
  },
  {
    question: "Quanto é 15% de 200?",
    choices: ["30", "25", "20", "15"],
    answer: "30"
  },
  {
    question: "Resolva: 5 + 3 × 2",
    choices: ["16", "11", "10", "8"],
    answer: "11"
  },
  {
    question: "Quanto é 144 dividido por 12?",
    choices: ["12", "11", "10", "13"],
    answer: "12"
  },
  {
    question: "Qual número falta: 5, 10, 15, ?, 25",
    choices: ["18", "20", "22", "23"],
    answer: "20"
  },
  {
    question: "Quantos segundos tem uma hora?",
    choices: ["3600", "6000", "1800", "7200"],
    answer: "3600"
  },
  {
    question: "Se você tem R$50 e gasta R$30, quanto sobra?",
    choices: ["15", "20", "25", "30"],
    answer: "20"
  },
  {
    question: "Quanto é 3 x 12?",
    choices: ["36", "32", "30", "28"],
    answer: "36"
  },
  {
    question: "Qual é o resultado de 100 - (25 + 25)?",
    choices: ["50", "40", "60", "70"],
    answer: "50"
  },
  {
    question: "Quanto é 0,5 + 0,25?",
    choices: ["0,75", "0,85", "0,70", "0,5"],
    answer: "0,75"
  },
  {
    question: "Se um bolo é dividido igualmente entre 4 pessoas, qual parte cada um recebe?",
    choices: ["1/2", "1/3", "1/4", "1/5"],
    answer: "1/4"
  },
  {
    question: "Qual é o dobro de 25?",
    choices: ["40", "45", "50", "55"],
    answer: "50"
  },
  {
    question: "Qual é o valor de 5²?",
    choices: ["10", "25", "15", "30"],
    answer: "25"
  },
  {
    question: "Se um triângulo tem dois lados com 5cm e um com 6cm, qual é seu perímetro?",
    choices: ["16cm", "18cm", "15cm", "14cm"],
    answer: "16cm"
  },
  {
    question: "Qual é a próxima fração equivalente a 1/2: 2/4, 3/6, 4/8, ...?",
    choices: ["5/9", "5/10", "6/12", "5/8"],
    answer: "5/10"
  },
  {
    question: "Quanto é 13 + 24?",
    choices: ["37", "36", "38", "39"],
    answer: "37"
  },
  {
    question: "Qual é o número que somado com 18 resulta em 30?",
    choices: ["10", "12", "14", "16"],
    answer: "12"
  },
  {
    question: "Quanto é 0,1 + 0,2?",
    choices: ["0,2", "0,3", "0,25", "0,4"],
    answer: "0,3"
  },
  {
    question: "Se um quadrado tem 4 lados de 8cm, qual é seu perímetro?",
    choices: ["32cm", "24cm", "36cm", "30cm"],
    answer: "32cm"
  },
  {
    question: "Qual número multiplicado por 0 dá 0?",
    choices: ["Qualquer número", "Somente 0", "Apenas 1", "Nenhum"],
    answer: "Qualquer número"
  },
  {
    question: "Qual número está entre 45 e 55?",
    choices: ["42", "56", "48", "60"],
    answer: "48"
  },
  {
    question: "Quanto é 1/4 + 1/4?",
    choices: ["1/2", "1/3", "1/8", "3/4"],
    answer: "1/2"
  },
  {
    question: "Se você dobrar 8, depois somar 4, qual será o resultado?",
    choices: ["16", "20", "18", "22"],
    answer: "20"
  },
  {
    question: "Qual número tem 3 dezenas e 4 unidades?",
    choices: ["34", "43", "30", "44"],
    answer: "34"
  },
  {
    question: "Qual é a metade de 36?",
    choices: ["16", "17", "18", "20"],
    answer: "18"
  },
  {
    question: "Quantos minutos tem 2 horas?",
    choices: ["100", "90", "120", "60"],
    answer: "120"
  },
  {
    question: "Se uma dúzia tem 12 ovos, quantos ovos há em 2 dúzias?",
    choices: ["22", "20", "24", "26"],
    answer: "24"
  },
  {
    question: "Quanto é 10³ (dez elevado à terceira potência)?",
    choices: ["1000", "100", "300", "30"],
    answer: "1000"
  },
  {
    question: "Quanto falta para 70 chegar a 100?",
    choices: ["20", "25", "30", "35"],
    answer: "30"
  },
  {
    question: "Se uma pizza tem 8 fatias e você come 3, quantas sobram?",
    choices: ["4", "5", "6", "3"],
    answer: "5"
  },
  {
    question: "Qual número é o antecessor de 100?",
    choices: ["99", "98", "101", "100"],
    answer: "99"
  }
];


