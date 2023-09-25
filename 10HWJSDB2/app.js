const buttonMenu = document.querySelector('.panelAdd'),
      buttonClose = document.querySelector('.panelclose'),
      panelMenu = document.querySelector('.side_panel'),
      mainAdd = document.querySelector('main');
     

      buttonClose.addEventListener('click', (event) => {
                   
            panelMenu.classList.remove('panel_close');
            mainAdd.classList.remove('main_close');
            buttonMenu.classList.remove('closed')
        })
      buttonMenu.addEventListener('click', (event) => {
        panelMenu.classList.add('panel_close');
        mainAdd.classList.add('main_close');
        buttonMenu.classList.add('closed');
        })

 