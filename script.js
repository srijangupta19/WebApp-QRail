document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const inspectorLoginScreen = document.getElementById('inspector-login-screen');
    const adminLoginScreen = document.getElementById('admin-login-screen');
    const inspectorPortalScreen = document.getElementById('inspector-portal-screen');
    const adminDashboardScreen = document.getElementById('admin-dashboard');
    const backButton = document.getElementById('back-button');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const languageSelector = document.getElementById('language-selector-main');

    const loginButtons = document.querySelectorAll('.login-button');
    const submitButtons = document.querySelectorAll('.login-submit-btn');

    let currentScreen = 'welcome';

    // Function to show a specific screen and update header buttons
    function showScreen(screenId) {
        welcomeScreen.style.display = 'none';
        inspectorLoginScreen.style.display = 'none';
        adminLoginScreen.style.display = 'none';
        inspectorPortalScreen.style.display = 'none';
        adminDashboardScreen.style.display = 'none';

        let showBackButton = false;
        let showHamburgerMenu = false;
        let showLanguageSelector = false;

        if (screenId === 'welcome') {
            welcomeScreen.style.display = 'flex';
            showLanguageSelector = true;
        } else if (screenId === 'inspector') {
            inspectorLoginScreen.style.display = 'flex';
            showBackButton = true;
        } else if (screenId === 'admin') {
            adminLoginScreen.style.display = 'flex';
            showBackButton = true;
        } else if (screenId === 'inspector-portal') {
            inspectorPortalScreen.style.display = 'flex';
            showHamburgerMenu = true;
        } else if (screenId === 'admin-portal') {
            adminDashboardScreen.style.display = 'flex';
            showHamburgerMenu = true;
        }

        backButton.style.display = showBackButton ? 'inline' : 'none';
        hamburgerMenu.style.display = showHamburgerMenu ? 'inline' : 'none';
        languageSelector.style.display = showLanguageSelector ? 'flex' : 'none';

        currentScreen = screenId;
    }

    // Click listener for the initial login buttons
    loginButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = button.getAttribute('data-target');
            showScreen(target);
        });
    });

    // Click listener for the Log In buttons
    submitButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = button.getAttribute('data-target');
            showScreen(target);
        });
    });

    // Click listener for the back arrow
    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('welcome');
    });

    // Initial screen load
    showScreen('welcome');
});