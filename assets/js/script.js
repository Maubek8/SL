// Arquivo: assets/js/script.js

// Estado global para armazenar dados das diferentes seções
const systemData = {
    logistica: { equipamentos: 0, manutencoes: 0 },
    financeiro: { receitas: 0, despesas: 0 },
    recursosHumanos: { totalFuncionarios: 0, horasTrabalhadas: 0 },
    dashboard: { simulações: 0, eficiência: 0 },
    relatorios: { gerados: 0, pendentes: 0 },
    cronograma: { atividades: [] },
    configuracoes: { tema: 'padrão' }
};

// Função para navegação entre as páginas
function navigateTo(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
            // Atualiza a exibição dos dados quando a página é carregada
            updateContent(page);
        })
        .catch(err => console.error('Erro ao carregar a página:', err));
}

// Função para atualizar dados dinâmicos ao carregar uma página
function updateContent(page) {
    if (systemData[page]) {
        const sectionData = systemData[page];
        let content = '';
        for (const key in sectionData) {
            content += `<p>${key}: ${sectionData[key]}</p>`;
        }
        document.getElementById(`${page}-data`).innerHTML = content;
    }
}

// Função para atualizar os dados globalmente
function updateGlobalData(section, data) {
    systemData[section] = { ...systemData[section], ...data };
    console.log(`Dados de ${section} atualizados:`, systemData[section]);
}

// Função para sincronizar dados entre páginas
function synchronizeData() {
    Object.keys(systemData).forEach(section => {
        updateContent(section);
    });
}

// Exemplo de função para adicionar IA no futuro
function integrateAI() {
    // Lógica de IA para fazer recomendações, processar dados ou otimizar o sistema
    console.log('IA integrada. Pronta para ajudar!');
}

// Função para iniciar a aplicação
function init() {
    navigateTo('dashboard');
    synchronizeData();
}
