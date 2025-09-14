function toggleLevel(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
        icon.textContent = '▲';
    } else {
        icon.textContent = '▼';
    }
}

// Открываем первый уровень по умолчанию
// document.querySelector('.level-0 .level-header').click();