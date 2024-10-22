// Array para armazenar os dados dos equipamentos
let equipamentos = [];

// Função para adicionar equipamento
function adicionarEquipamento() {
    // Capturar os valores do formulário
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const statusEquipamento = document.getElementById('status-equipamento').value;

    // Criar objeto de equipamento e adicionar ao array
    const novoEquipamento = { nome: nomeEquipamento, status: statusEquipamento };
    equipamentos.push(novoEquipamento);

    // Atualizar a tabela e o gráfico
    atualizarTabelaEquipamentos();
    atualizarGraficoEquipamentos();

    // Limpar o formulário
    document.getElementById('equipamento-form').reset();
}

// Função para atualizar a tabela de equipamentos
function atualizarTabelaEquipamentos() {
    const tabela = document.getElementById('equipamentos-lista');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizar

    // Iterar sobre os equipamentos e criar linhas para a tabela
    equipamentos.forEach(equipamento => {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${equipamento.nome}</td><td>${equipamento.status}</td>`;
        tabela.appendChild(linha);
    });
}

// Função para atualizar o gráfico de status dos equipamentos
function atualizarGraficoEquipamentos() {
    const disponiveis = equipamentos.filter(e => e.status === 'Disponível').length;
    const manutencao = equipamentos.filter(e => e.status === 'Em Manutenção').length;

    const ctx = document.getElementById('equipamentosGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Disponível', 'Em Manutenção'],
            datasets: [{
                data: [disponiveis, manutencao],
                backgroundColor: ['#2ecc71', '#e74c3c'],
            }]
        }
    });
}

// Inicializar a página de logística
function initLogisticaPage() {
    if (window.location.pathname.includes("logistica.html")) {
        // Executa as funções específicas da página de logística
        atualizarTabelaEquipamentos();
        atualizarGraficoEquipamentos();
    }
}

// Chame essa função ao carregar a página
initLogisticaPage();
