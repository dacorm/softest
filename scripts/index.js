const arrowImage = document.querySelector('.process__select-img');
const selectMenu = document.querySelector('.process__select-wrapper');
const select = document.querySelector('.process__select-title')
const selectLabels = document.querySelectorAll('.process__select-label');
let selectTitle = 'Выберите тип системы:';

select.prepend(selectTitle);

function selectOpen() {
    selectMenu.classList.toggle('process__select-wrapper_active');
    arrowImage.classList.toggle('process__select-img_active');
    select.classList.toggle('process__select-title_active');
}

select.addEventListener('click', selectOpen)

for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', () => {
        selectMenu.classList.remove('process__select-wrapper_active');
        arrowImage.classList.remove('process__select-img_active');
        select.classList.remove('process__select-title_active');
        selectTitle = selectLabels[i].textContent;
        select.textContent = selectTitle;
    })
}