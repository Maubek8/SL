// Inicializar a página de Logística apenas se a URL contiver 'logistica.html'
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes("logistica.html")) {
        initLogisticaPage();
    }
});

// Função para inicializar a página de Logística
function initLogisticaPage() {
    atualizarTabelaEquipamentos();
    atualizarGraficoEquipamentos();

    // Outras funções específicas de logística podem ser chamadas aqui
}

// Função para adicionar equipamento
function adicionarEquipamento() {
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const statusEquipamento = document.getElementById('status-equipamento').value;

    const novoEquipamento = { nome: nomeEquipamento, status: statusEquipamento };
    equipamentos.push(novoEquipamento);

    atualizarTabelaEquipamentos();
    atualizarGraficoEquipamentos();

    document.getElementById('equipamento-form').reset();
}

// Função para atualizar a tabela de equipamentos
function atualizarTabelaEquipamentos() {
    const tabela = document.getElementById('equipamentos-lista');
    tabela.innerHTML = ''; // Limpa a tabela

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

// Array global para armazenar os equipamentos
let equipamentos = [];
