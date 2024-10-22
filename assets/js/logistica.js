document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes("logistica.html")) {
        initLogisticaPage();
    }
});

function initLogisticaPage() {
    // Inicialização das funções
    atualizarTabelaEquipamentos();
    atualizarGraficoEquipamentos();
    atualizarTabelaMateriais();
    atualizarTabelaParticipantes();
    atualizarTabelaSuporte();
}

// Funções da Gestão de Equipamentos
let equipamentos = [];

function adicionarEquipamento() {
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const statusEquipamento = document.getElementById('status-equipamento').value;
    const novoEquipamento = { nome: nomeEquipamento, status: statusEquipamento };
    equipamentos.push(novoEquipamento);
    atualizarTabelaEquipamentos();
    atualizarGraficoEquipamentos();
}

function atualizarTabelaEquipamentos() {
    const tabela = document.getElementById('equipamentos-lista');
    tabela.innerHTML = '';
    equipamentos.forEach(equipamento => {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${equipamento.nome}</td><td>${equipamento.status}</td>`;
        tabela.appendChild
