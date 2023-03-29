    // open register page when clicking creat account button on login
    const newAccButton = document.getElementsByClassName('new-user__button')[0];

    newAccButton.addEventListener('click', () => {
        window.location = 'register.html';
    });