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
    const statusEquipamento = document.getElementById('status
