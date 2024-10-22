document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes("logistica.html")) {
        initLogisticaPage();
    }
});

function initLogisticaPage() {
    // Inicializa a página com a seção de equipamentos exibida por padrão
    showSection('equipment-management');

    // Adiciona evento para adicionar equipamento
    document.getElementById('equipamento-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        adicionarEquipamento(); // Função para adicionar equipamento
    });

    // Outros eventos para materiais, participantes, etc., podem ser adicionados aqui
}

// Função para exibir a seção apropriada ao clicar no sub-botão
function showSection(sectionId) {
    console.log('Exibindo seção:', sectionId); // Depuração para garantir que a seção está sendo chamada

    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção clicada
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    } else {
        console.error('Seção não encontrada: ' + sectionId);
    }
}

// Função para adicionar equipamento na seção "Gestão de Equipamentos"
let equipamentos = [];

function adicionarEquipamento() {
    const nomeEquipamento = document.getElementById('nome-equipamento').value;
    const statusEquipamento = document.getElementById('status-equipamento').value;

    if (nomeEquipamento && statusEquipamento) {
        const novoEquipamento = { nome: nomeEquipamento, status: statusEquipamento };
        equipamentos.push(novoEquipamento);
        atualizarTabelaEquipamentos();
        limparFormularioEquipamento();
    }
}

function atualizarTabelaEquipamentos() {
    const tabela = document.getElementById('equipamentos-lista');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizar

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
    atualizarTabelaEquipamentos(); // Atualiza a tabela
}

function limparFormularioEquipamento() {
    document.getElementById('nome-equipamento').value = '';
    document.getElementById('status-equipamento').value = 'Disponível';
}

// Funções para outras seções podem ser adicionadas aqui

// Exemplo de função para a seção de Materiais Consumíveis
let materiais = [];

function adicionarMaterial() {
    const nomeMaterial = document.getElementById('nome-material').value;
    const quantidadeMaterial = document.getElementById('quantidade-material').value;

    if (nomeMaterial && quantidadeMaterial) {
        const novoMaterial = { nome: nomeMaterial, quantidade: quantidadeMaterial };
        materiais.push(novoMaterial);
        atualizarTabelaMateriais();
        limparFormularioMaterial();
    }
}

function atualizarTabelaMateriais() {
    const tabela = document.getElementById('materiais-lista');
    tabela.innerHTML = ''; // Limpa a tabela antes de atualizar

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
    materiais[index].quantidade++; // Incrementa a quantidade do material
    atualizarTabelaMateriais(); // Atualiza a tabela
}

function limparFormularioMaterial() {
    document.getElementById('nome-material').value = '';
    document.getElementById('quantidade-material').value = '';
}

// Você pode adicionar funções similares para a seção de "Gestão de Participantes", "Suporte Operacional", etc.
