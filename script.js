const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const dialogMenu = document.querySelector('.dialog-menu');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    dialogMenu.style.display = 'block';
    closeBtn.style.display = 'inline';
})

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialogMenu.style.display = 'none';
    closeBtn.style.display = 'none';
})
