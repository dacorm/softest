const arrowImage = document.querySelector('.process__select-img');
const selectMenu = document.querySelector('.process__select-wrapper');
const select = document.querySelector('.process__select-title')
const selectLabels = document.querySelectorAll('.process__select-label');
const percents = document.querySelector('#percents');
const inputRange = document.querySelector('#count');
const popup = document.querySelector('.burger__popup');
const firstBar = document.querySelector('#firstbar');
const secondBar = document.querySelector('#secondbar');
const thirdBar = document.querySelector('#thirdbar');
const burgerBtn = document.querySelector('.burger');
const burgerLinks = document.querySelectorAll('.burger__link');
let selectTitle = 'Выберите тип системы:';

select.prepend(selectTitle);
percents.textContent = (inputRange.value + '%');

function burgerButton() {
    firstBar.classList.toggle('bar_active_first');
    secondBar.classList.toggle('bar_active_second');
    thirdBar.classList.toggle('bar_active_third');
}

function popupOpen() {
    popup.classList.toggle('burger__popup_active')
}

function popupClose() {
    popup.classList.remove('burger__popup_active')
}

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

inputRange.addEventListener('mouseup', (evt) => {
    percents.textContent = (evt.target.value + '%');
})

for (const burgerLink of burgerLinks) {
    burgerLink.addEventListener('click', popupOpen);
    burgerLink.addEventListener('click', burgerButton);
}

burgerBtn.addEventListener('click', () => {
    burgerButton();
    popupOpen();
})


