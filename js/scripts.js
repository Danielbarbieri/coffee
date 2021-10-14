
            const OPEN_BUTTON = document.querySelector('.open-modal');
            const body = document.querySelector('body');
            const modal = document.querySelector('.modal');

            const openModal = () => {
                modal.showModal();
            };

            OPEN_BUTTON.addEventListener('click', openModal);        
            
        
   