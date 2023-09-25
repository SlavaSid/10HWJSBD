const buttonOpen = document.querySelector('.popup-btn'),
      buttonClose = document.querySelector('.popup__close'),
      fonWindov = document.querySelector('.popup');

      
    document.addEventListener('click', (event) => {
        if(event.target.matches('.popup-btn')){
            fonWindov.classList.add('opened')};
        if(event.target.matches('.popup') || event.target.matches('.popup__close')){
            fonWindov.classList.remove('opened');
        }
    })