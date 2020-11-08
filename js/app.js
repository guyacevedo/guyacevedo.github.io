const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    boton.click(); 
    //document.body.classList.toggle('dark-theme');
 
} else if (currentTheme === 'light') {
   
    document.body.classList.toggle('light-theme');
}

boton.addEventListener('change', () => {
    let theme;
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', theme)
})