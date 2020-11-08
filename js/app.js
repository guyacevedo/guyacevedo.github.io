let theme;
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    $('body').removeClass('dark-theme');
    $('body').addClass('light-theme');
    theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
} else if (currentTheme === 'dark') {
    theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
} else if (currentTheme === null) {
    $('body').removeClass('dark-theme');
    $('body').addClass('light-theme');
    theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
}
localStorage.setItem('theme', theme);