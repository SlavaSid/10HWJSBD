const buttonMenu = document.querySelector('.panelAdd'),
      buttonClose = document.querySelector('.panelclose'),
      panelMenu = document.querySelector('.side_panel'),
      mainAdd = document.querySelector('main');
     

      buttonClose.addEventListener('click', (event) => {
        if(event.target.matches('.panelclose')){
            panelMenu.style.width = '0px';
            mainAdd.style.marginLeft ='0px';
            buttonMenu.classList.remove('closed');
        }
    })


      buttonMenu.addEventListener('click', (event) => {
        if(event.target.matches('.panelAdd')){
            panelMenu.style.width = '250px';
            mainAdd.style.marginLeft ='250px';
            buttonMenu.classList.add('closed');
        }
    })

 