document.addEventListener('DOMContentLoaded', () => {
    const currentPath = document.getElementsByClassName('home-image')[0].getElementsByTagName('path');
    const counterUp = document.querySelector('.counter-up');
    const counterDown = document.querySelector('.counter-down');
    const counterHTMLElement = document.querySelector('.counter');
    const modal = document.querySelector('.modal');
    const modalCloseButton =document.querySelector('.modal-close-button');
    const buttonPrimary =document.querySelector('.button-primary');

    let currentFloor = 2;
    [...currentPath].forEach((perPath) => {
        perPath.addEventListener('mouseover', () => {
            clearHomeFloors();
            currentFloor = perPath.dataset.floor;
            counterHTMLElement.textContent = currentFloor;
        });
        perPath.addEventListener('click', toggleModal);
    })

    counterUp.addEventListener('click', () => {
        if (currentFloor < currentPath.length+1) {
            currentFloor++;
            someFn();
            const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            counterHTMLElement.textContent = usCurrentFloor;    
        }
    })

    counterDown.addEventListener('click', () => {
        if (currentFloor > 2) {
            currentFloor--;
            someFn();
            const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            counterHTMLElement.textContent = usCurrentFloor;
        }
    })

    modalCloseButton.addEventListener('click', toggleModal); 
    buttonPrimary.addEventListener('click', toggleModal);

    const someFn = () => {
        clearHomeFloors();
        [...currentPath].forEach((perPath) => {
            if (perPath.dataset.floor == currentFloor) {
                perPath.classList.toggle('current-floor');
            }
        })
    }

    function clearHomeFloors () {
        [...currentPath].forEach(p => p.classList.remove('current-floor'));
    }

    function toggleModal() {
        modal.classList.toggle('is-open');
    };
})