// Função para determinar qual equipe estava trabalhando em uma data e hora fornecida
function equipeTrabalhando(dataInicial, dataHoraFornecida) {
    // Calcula a diferença de tempo em milissegundos entre a data fornecida e a data inicial
    const diff = dataHoraFornecida - dataInicial;

    // Converte a diferença para horas
    const horasDecorridas = diff / (1000 * 60 * 60); // 1000ms * 60s * 60m = milissegundos por hora

    // Ciclo de 48 horas (12 horas de trabalho para cada equipe em ordem)
    const ciclo = 48;

    // Determina o "tempo no ciclo" usando o módulo (resto da divisão por 48)
    const tempoNoCiclo = horasDecorridas % ciclo;

    // Identifica a equipe com base no tempo no ciclo
    if (tempoNoCiclo < 12) {
        return "Azul"; // Primeiras 12 horas: Equipe Azul
    } else if (tempoNoCiclo < 24) {
        return "Vermelho"; // Próximas 12 horas: Equipe Vermelho
    } else if (tempoNoCiclo < 36) {
        return "Amarelo"; // Próximas 12 horas: Equipe Amarelo
    } else {
        return "Verde"; // Últimas 12 horas do ciclo: Equipe Verde
    }
}

// Data de início conforme o turno inicial (01/11/2024, 07:01, Equipe Azul)
const dataInicial = new Date("2024-11-01T07:01:00Z");

// Função para determinar a equipe de forma dinâmica
function verificarEquipe() {
    const dataHoraFornecida = new Date(); // Captura o momento atual
    const equipe = equipeTrabalhando(dataInicial, dataHoraFornecida);
    console.log(`A equipe trabalhando em ${dataHoraFornecida.toISOString()} é: ${equipe}`);

    // Função Bubble para retornar o resultado
    bubble_fn_equipe(equipe);
}
