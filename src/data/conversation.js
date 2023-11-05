export default {
  Ola: {
    reply: "Olá, como posso ajudar?",
  },

  "Quero agendar uma consulta": {
    reply: "Claro! Para qual especialidade você gostaria de agendar?",
    options: ["Cardiologia", "Dermatologia", "Ortopedia"],
  },

  Cardiologia: {
    reply:
      "Ótimo! Temos horários disponíveis na próxima terça-feira e quarta-feira. Qual desses dias funciona melhor para você?",
    options: ["Terça-feira", "Quarta-feira"],
  },

  Dermatologia: {
    // Respostas e opções similares para Dermatologia
  },

  Ortopedia: {
    // Respostas e opções similares para Ortopedia
  },

  "Terça-feira": {
    reply:
      "Perfeito! Temos horários às 10h, 14h e 16h. Qual horário você prefere?",
    options: ["10h", "14h", "16h"],
  },

  // ... e assim por diante para os outros horários e dias.

  "10h":
    "Agendado! Sua consulta com o cardiologista está marcada para terça-feira às 10h. Até lá!",
};
