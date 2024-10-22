tabela.appendChild(linha);
    });
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

// Funções de Materiais Consumíveis
let materiais = [];

function atualizarTabelaMateriais() {
    const tabela = document.getElementById('materiais-lista');
    tabela.innerHTML = '';
    materiais.forEach(material => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${material.nome}</td>
            <td>${material.quantidade}</td>
            <td><button onclick="reporMaterial('${material.nome}')">Repor</button></td>
        `;
        tabela.appendChild(linha);
    });
}

function reporMaterial(nomeMaterial) {
    const material = materiais.find(m => m.nome === nomeMaterial);
    if (material) {
        material.quantidade += 10; // Exemplo de quantidade de reposição
        atualizarTabelaMateriais();
    }
}

// Funções de Gestão de Participantes
let participantes = [];

function atualizarTabelaParticipantes() {
    const tabela = document.getElementById('participantes-lista');
    tabela.innerHTML = '';
    participantes.forEach(participante => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${participante.nome}</td>
            <td>${participante.cargo}</td>
            <td>${participante.setor}</td>
        `;
        tabela.appendChild(linha);
    });
}

// Funções de Relatórios e Análises
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

// Funções de Suporte Operacional
let suportes = [];

function registrarSuporte() {
    const descricaoSuporte = document.getElementById('descricao-suporte').value;
    const novoSuporte = { descricao: descricaoSuporte, status: 'Pendente' };
    suportes.push(novoSuporte);
    atualizarTabelaSuporte();
}

function atualizarTabelaSuporte() {
    const tabela = document.getElementById('suporte-lista');
    tabela.innerHTML = '';
    suportes.forEach(suporte => {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${suporte.descricao}</td><td>${suporte.status}</td>`;
        tabela.appendChild(linha);
    });
}

// Mostrar diferentes seções
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
