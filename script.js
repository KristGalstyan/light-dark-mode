const toggleSwitch = document.querySelector('input[type="checkbox"]'),
      nav = document.querySelector('#nav'),
      toggleIcon = document.querySelector('#toggle-icon'),
      image1 = document.querySelector('#image1'),
      image2 = document.querySelector('#image2'),
      image3 = document.querySelector('#image3'),
      textBox = document.querySelector('#text-box');
      
    const DARK_THEME = 'dark',
          LIGHT_THEME = 'light';

// Dark or Light images
function imageMode(color) {
        image1.src = `img/undraw_static_website_${color}.svg`;
        image2.src = `img/undraw_a_moment_${color}.svg`;
        image3.src = `img/undraw_opinion_${color}.svg`;
}

function commonFun(color) {
    document.documentElement.setAttribute('data-theme', `${color}`);
        localStorage.setItem('theme', `${color}`);
        color === DARK_THEME ? toggleDarkLightMode(true) : toggleDarkLightMode(false);
}
function toggleDarkLightMode(isDark) {
    const modeIcon = isDark ? ['fa-sun', 'fa-moon'] : ['fa-moon', 'fa-sun'];
    nav.style.backgroundColor = isDark ? 'rgba(0 0 0 / 50%)' : 'rgba(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rbg(255 255 255 / 50%)' : 'rbg(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
    toggleIcon.children[1].classList.replace(...modeIcon);
    isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        commonFun(DARK_THEME);
    } else {
        commonFun(LIGHT_THEME);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === DARK_THEME) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    } else {
        localStorage.removeItem('data-theme', DARK_THEME);
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        toggleDarkLightMode(false);
    }
}