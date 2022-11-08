const toggleSwitch = document.querySelector('input[type="checkbox"]'),
      nav = document.querySelector('#nav'),
      toggleIcon = document.querySelector('#toggle-icon'),
      image1 = document.querySelector('#image1'),
      image2 = document.querySelector('#image2'),
      image3 = document.querySelector('#image3'),
      textBox = document.querySelector('#text-box');

// Dark or Light images
function imageMode(color) {
        image1.src = `img/undraw_static_website_${color}.svg`;
        image2.src = `img/undraw_a_moment_${color}.svg`;
        image3.src = `img/undraw_opinion_${color}.svg`;
}

// Dark mode style
function darkMode() {
    nav.style.backgroundColor = 'rgba(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rbg(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}


// Light mode style
function lightMode() {
    nav.style.backgroundColor = 'rgba(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rbg(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}



// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
        darkMode();
    } else {
        localStorage.removeItem('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}