document.addEventListener('click', (e) => {
    const btnOpenDropMenu = e.target.closest('[data-menu-panel-bottom-btn]')

    if (btnOpenDropMenu) {
        const selectAttribute = btnOpenDropMenu.getAttribute('data-menu-panel-bottom-btn');
        const dropMenu = document.querySelector(`[data-menu-panel-bottom-drop-menu=${selectAttribute}]`);

        dropMenu.classList.add('drop-menu-open');
    }
})

document.addEventListener('click', (e) => {
    const btnCloserDropMenu = e.target.closest('[data-menu-panel-bottom-close-drop-menu]')
    const btnOpenDropMenu = e.target.closest('[data-menu-panel-bottom-btn]')

    if (btnCloserDropMenu) {
        const selectAttribute = btnCloserDropMenu.getAttribute('data-menu-panel-bottom-close-drop-menu');
        const dropMenu = document.querySelector(`[data-menu-panel-bottom-drop-menu=${selectAttribute}]`);

        dropMenu.classList.remove('drop-menu-open');
    }

    if (!e.target.closest('[data-menu-panel-bottom-drop-menu]') && !btnOpenDropMenu) {
        const dropMenus = document.querySelectorAll(`[data-menu-panel-bottom-drop-menu]`);

        dropMenus.forEach((element) => {

            if (element.classList.contains('drop-menu-open')) {
                element.classList.remove('drop-menu-open');
            }
        })
    }
})


document.addEventListener('click', (e) => {
    const btnTel = e.target.closest('[data-menu-panel-bottom_contact_switch-tel]')
    const btnMail = e.target.closest('[data-menu-panel-bottom_contact_switch-mail]')

    if (btnTel) {
        const menuPanelBottomContact = e.target.closest('[data-menu-panel-bottom_contact]')
        const HasBtnTel = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_switch-tel]')
        const hasBtnMail = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_switch-mail]')
        const linkTel = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_tel]')
        const linkMail = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_mail]')
        console.log(menuPanelBottomContact);

        HasBtnTel.classList.add('turn-on');
        hasBtnMail.classList.remove('turn-on');
        linkTel.classList.add('turn-on');
        linkMail.classList.remove('turn-on');
    }

    if (btnMail) {
        const menuPanelBottomContact = e.target.closest('[data-menu-panel-bottom_contact]')
        const HasBtnTel = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_switch-tel]')
        const hasBtnMail = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_switch-mail]')
        const linkTel = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_tel]')
        const linkMail = menuPanelBottomContact.querySelector('[data-menu-panel-bottom_contact_mail]')
        console.log(menuPanelBottomContact);

        hasBtnMail.classList.add('turn-on');
        HasBtnTel.classList.remove('turn-on');
        linkMail.classList.add('turn-on');
        linkTel.classList.remove('turn-on');
    }


})