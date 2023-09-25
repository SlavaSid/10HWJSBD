const buttonMenu = document.querySelector('.panelAdd'),
      buttonClose = document.querySelector('.panelclose'),
      panelMenu = document.querySelector('.side_panel'),
      mainAdd = document.querySelector('main');
     

      buttonClose.addEventListener('click', (event) => {
        if(event.target.matches('.panelclose')){
            panelMenu.style.width = '0px';
            mainAdd.style.marginLeft ='0px';

            mainAdd.style.transition ='0.5s';
            panelMenu.style.transition ='0.5s';

            buttonMenu.classList.remove('closed');
        }
    })


      buttonMenu.addEventListener('click', (event) => {
        if(event.target.matches('.panelAdd')){
            panelMenu.style.width = '250px';
            mainAdd.style.marginLeft ='250px';
            mainAdd.style.transition ='0.5s';
            panelMenu.style.transition ='0.5s';
            buttonMenu.classList.add('closed');
        }
    })

 