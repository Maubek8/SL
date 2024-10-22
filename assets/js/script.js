// Função para navegação entre páginas
function navigateTo(page) {
    window.location.href = page;
}

// Função para manipulação de sub-menus (geral)
function toggleSubMenu(id) {
    const subMenu = document.getElementById(id + '-submenu');
    const menuItem = subMenu.parentElement;
    menuItem.classList.toggle('active');
    subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
}

// Exemplo de função global para exibição de alertas em todo o site
function showAlert(message) {
    alert(message);
}

// Função para verificar se a página atual é mobile (global)
function isMobile() {
    return window.innerWidth <= 768;
}

// Adicionar comportamento responsivo ao site (barra lateral retrátil)
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            document.querySelector('.sidebar').classList.toggle('collapsed');
        });
    }
});
