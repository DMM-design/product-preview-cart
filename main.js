const  $btnCard = document.querySelector('.btn-card');
const $notificatorModal = document.querySelector('.modal-notificator');

const clickedButton = () => {
    const time = 3000;
    $notificatorModal.style.display = 'block';
    setTimeout(() => {
        $notificatorModal.style.display = 'none';
    }, time);
};

$btnCard.addEventListener('click', clickedButton);
