// useCalendar.js

import { ref, watch } from "vue";
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";

/**
 * Composable para gerenciar a criação e exibição de um calendário.
 *
 * @returns {Object} Propriedades e funções relacionadas ao calendário.
 */
export function useCalendar() {
  // Dias da semana em português
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // Lista de nomes de meses em português
  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  // Ref para o mês selecionado. Inicialmente, é o mês atual.
  const selectedMonth = ref(new Date().getMonth() + 1);

  // Ref para o ano selecionado. Inicialmente, é o ano atual.
  const selectedYear = ref(new Date().getFullYear());

  // Array reativo para armazenar as semanas do mês selecionado.
  const weeks = ref([]);

  // Assista às mudanças em selectedMonth e selectedYear
  watch([selectedMonth, selectedYear], () => {
    generateCalendar(selectedMonth.value, selectedYear.value);
  });

  /**
   * Gera o calendário para um mês e ano especificados.
   *
   * @param {number} month - O mês para o qual o calendário deve ser gerado (1-12).
   * @param {number} year - O ano para o qual o calendário deve ser gerado.
   */
  function generateCalendar(month, year) {
    // Limpa o array de semanas antes de gerar um novo calendário
    weeks.value.splice(0);
    const startDate = startOfMonth(new Date(year, month - 1));
    const endDate = endOfMonth(new Date(year, month - 1));

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // Preencha os dias anteriores do mês atual até o último domingo
    while (days[0].getDay() !== 0) {
      const previousDay = new Date(days[0].getTime() - 24 * 60 * 60 * 1000);
      days.unshift(previousDay);
    }

    // Preencha os dias após o mês atual até o próximo sábado
    while (days[days.length - 1].getDay() !== 6) {
      const nextDay = new Date(
        days[days.length - 1].getTime() + 24 * 60 * 60 * 1000
      );
      days.push(nextDay);
    }

    while (days.length) {
      // Mapeie cada dia para mostrar apenas o número do dia, não a data completa

      weeks.value.push(
        days.splice(0, 7).map((day) => ({
          // Retorna um array onde em ordem: YYYY, MM, DD
          label: day.getTime(),
        }))
      );
    }
  }

  /**
   * Define o mês e o ano e, em seguida, gera o calendário para essas datas.
   *
   * @param {number} month - O mês para o qual o calendário deve ser atualizado (1-12).
   * @param {number} year - O ano para o qual o calendário deve ser atualizado.
   */
  function setMonthAndGenerate(month, year) {
    selectedMonth.value = month;
    selectedYear.value = year;
    generateCalendar(month, year);
  }

  /**
   * Traduz o mês.
   * Se receber um número, retorna o nome do mês correspondente.
   * Se receber uma string (nome do mês), retorna o número correspondente.
   *
   * @param {number|string} month - O mês para traduzir (número ou nome).
   * @returns {string|number} - Retorna o nome ou número correspondente do mês.
   */
  function translateMonth(month) {
    month = Number(month);
    if (typeof month === "number") {
      return monthNames[month - 1]; // Os arrays são indexados a partir de 0
    } else if (typeof month === "string") {
      month = month.trim().toLocaleLowerCase();
      return monthNames.indexOf(month) + 1; // Adicione 1 porque os meses começam de 1 (Janeiro)
    }
    return null; // Caso o valor fornecido não seja reconhecido
  }

  return {
    translateMonth,
    selectedMonth,
    selectedYear,
    weeks,
    daysOfWeek,
    setMonthAndGenerate,
  };
}

/*
Exemplo de uso:

Dentro do seu componente Vue:

import { useCalendar } from './useCalendar';

setup() {
    const { selectedMonth, selectedYear, weeks, setMonthAndGenerate } = useCalendar();
    setMonthAndGenerate(selectedMonth.value, selectedYear.value);

    return {
        weeks,
        setMonthAndGenerate
    };
}

Dica: Você pode expandir esse composable para incluir mais funcionalidades conforme necessário, como seleção de data, eventos em datas específicas etc.
Sugestão: Ao usar esse composable em conjunto com um componente de calendário, considere adicionar estilos e interatividade para melhorar a experiência do usuário.
*/
