// Função para determinar qual equipe estava trabalhando em uma data e hora fornecida
function equipeTrabalhando(dataInicial, dataHoraFornecida) {
// Calcula a diferença de tempo em milissegundos entre a data fornecida e a data inicial
const diff = dataHoraFornecida - dataInicial;

// Converte a diferença para horas
const horasDecorridas = diff / (1000 * 60 * 60); // 1000ms * 60s * 60m = milissegundos por hora

// Ciclo de 48 horas (12 horas de trabalho + 36 horas de descanso)
const ciclo = 48;

// Determina o "tempo no ciclo" usando o módulo (resto da divisão por 48)
const tempoNoCiclo = horasDecorridas % ciclo;

// Identifica a equipe com base no tempo no ciclo
if (tempoNoCiclo < 12) {
return "Azul"; // Primeiras 12 horas: Equipe 1 trabalha
} else if (tempoNoCiclo < 24) {
return "Vermelho"; // Próximas 12 horas: Equipe 2 trabalha
} else if (tempoNoCiclo < 36) {
return "Amarelo"; // Próximas 12 horas: Equipe 3 trabalha
} else {
return "Verde"; // Últimas 12 horas do ciclo: Equipe 4 trabalha
}
}

// Data de início (31/10/2024, 19:01)
const dataInicial = new Date("2024-10-31T00:19:01Z"); // Representa 31/10/2024 às 19:01 em UTC

// Exemplo de data fornecida (pode ser qualquer data que você queira verificar)
const dataHoraFornecida = new Date(); // Exemplo: 03/11/2024 às 14:00 em UTC

// Chama a função para determinar qual equipe estava trabalhando
const equipe = equipeTrabalhando(dataInicial, dataHoraFornecida);
console.log(`A equipe trabalhando em ${dataHoraFornecida.toISOString()} é: ${equipe}`);

bubble_fn_equipe(equipe);

