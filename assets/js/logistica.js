document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes("logistica.html")) {
        initLogisticaPage();
    }
});

function initLogisticaPage() {
    // Inicializa a página com a seção de equipamentos exibida por padrão
    showSection('equipment-management');

    // Adiciona eventos aos formulários
    document.getElementById('equipamento-form').addEventListener('submit', function (e) {
        e.preventDefault();
        adicionarEquipamento();
    });

    document.getElementById('material-form').addEventListener('submit', function (e) {
        e.preventDefault();
        adicionarMaterial();
    });

    document.getElementById('suporte-form').addEventListener('submit', function (e) {
        e.preventDefault();
        registrarSuporte();
    });
}

// Função para exibir a seção apropriada ao clicar no sub-botão
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Função para adicionar equipamento na seção "Gestão de Equipamentos"
let equipamentos = [];

function adicionarEquipamento() {
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const statusEquipamento = document.getElementById('statusfunction adicionarEquipamento() {
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const statusEquipamento = document.getElementById('status-equipamento').value;

    if (nomeEquipamento && statusEquipamento) {
        const novoEquipamento = { nome: nomeEquipamento, status: statusEquipamento };
        equipamentos.push(novoEquipamento);  // Adiciona o novo equipamento ao array
        atualizarTabelaEquipamentos();       // Atualiza a tabela com os equipamentos
        atualizarGraficoEquipamentos();      // Atualiza o gráfico de equipamentos
        limparFormularioEquipamento();       // Limpa o formulário de entrada
    }
}

function atualizarTabelaEquipamentos() {
    const tabela = document.getElementById('equipamentos-lista');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizá-la

    equipamentos.forEach((equipamento, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${equipamento.nome}</td>
            <td>${equipamento.status}</td>
            <td><button onclick="removerEquipamento(${index})">Remover</button></td>
        `;
        tabela.appendChild(linha);
    });
}

function removerEquipamento(index) {
    equipamentos.splice(index, 1); // Remove o equipamento pelo índice
    atualizarTabelaEquipamentos();  // Atualiza a tabela após remover o item
    atualizarGraficoEquipamentos(); // Atualiza o gráfico após a remoção
}

function limparFormularioEquipamento() {
    document.getElementById('nome-equipamento').value = '';
    document.getElementById('status-equipamento').value = 'Disponível';
}

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
                backgroundColor: ['#2ecc71', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

// Funções para Materiais Consumíveis
let materiais = [];

function adicionarMaterial() {
    const nomeMaterial = document.getElementById('nome-material').value;
    const quantidadeMaterial = document.getElementById('quantidade-material').value;

    if (nomeMaterial && quantidadeMaterial) {
        const novoMaterial = { nome: nomeMaterial, quantidade: parseInt(quantidadeMaterial) };
        materiais.push(novoMaterial);  // Adiciona o novo material ao array
        atualizarTabelaMateriais();    // Atualiza a tabela de materiais
        limparFormularioMaterial();    // Limpa o formulário de entrada
    }
}

function atualizarTabelaMateriais() {
    const tabela = document.getElementById('materiais-lista');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizá-la

    materiais.forEach((material, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${material.nome}</td>
            <td>${material.quantidade}</td>
            <td><button onclick="reporMaterial(${index})">Repor</button></td>
        `;
        tabela.appendChild(linha);
    });
}

function reporMaterial(index) {
    materiais[index].quantidade++;  // Incrementa a quantidade do material
    atualizarTabelaMateriais();     // Atualiza a tabela após a reposição
}

function limparFormularioMaterial() {
    document.getElementById('nome-material').value = '';
    document.getElementById('quantidade-material').value = '';
}

// Funções para Suporte Operacional
let suportes = [];

function registrarSuporte() {
    const descricaoSuporte = document.getElementById('descricao-suporte').value;

    if (descricaoSuporte) {
        const novoSuporte = { descricao: descricaoSuporte, status: 'Pendente' };
        suportes.push(novoSuporte);  // Adiciona o novo suporte ao array
        atualizarTabelaSuporte();    // Atualiza a tabela de suporte
        limparFormularioSuporte();   // Limpa o formulário de entrada
    }
}

function atualizarTabelaSuporte() {
    const tabela = document.getElementById('suporte-lista');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizá-la

    suportes.forEach((suporte, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${suporte.descricao}</td>
            <td>${suporte.status}</td>
        `;
        tabela.appendChild(linha);
    });
}

function limparFormularioSuporte() {
    document.getElementById('descricao-suporte').value = '';
}

// Funções para Relatórios e Análises
function gerarRelatorio() {
    const ctx = document.getElementById('relatoriosGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [{
                label: 'Equipamentos Adicionados',
                data: [5, 7, 3, 8],
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para alternar exibição de seções
function toggleSubMenu(id) {
    const subMenu = document.getElementById(id + '-submenu');
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
} 
