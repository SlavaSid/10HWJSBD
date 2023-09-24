const buttonOpen = document.querySelector('.popup-btn'),
      buttonClose = document.querySelector('.popup__close'),
      fonWindov = document.querySelector('.popup'),
      noneFon =document.querySelectorAll('.popup__content');



      buttonOpen.addEventListener('click', (event) => {
        if(event.target.matches('.popup-btn')){
            fonWindov.classList.add('opened');
        }
    })

    buttonClose.addEventListener('click', (event) => {
        if(event.target.matches('.popup__close')){
            fonWindov.classList.remove('opened');
        }
    })
    document.addEventListener('click', (event) => {
        if(event.target.matches('.popup')){
            fonWindov.classList.remove('opened');
        }
    })