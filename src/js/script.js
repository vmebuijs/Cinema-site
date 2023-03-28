if(location.pathname == '/login.html'){
    // open register page when clicking creat account button on login
    const newAccButton = document.getElementsByClassName('new-user__button')[0];

    newAccButton.addEventListener('click', () => {
        window.location = 'register.html';
    });
}

if(location.pathname == '/account.html'){
    // buttons on the account page to change what section you see
    const accInfo = document.getElementsByClassName('account-information')[0];
    const ordHistory = document.getElementsByClassName('order-history')[0];

    const accButton = document.getElementsByClassName('account-controls__button')[0];
    const ordButton = document.getElementsByClassName('account-controls__button')[1];

    accButton.addEventListener('click', () => {
        accInfo.style.display = 'block';
        ordHistory.style.display = 'none';
    });

    ordButton.addEventListener('click', () => {
        ordHistory.style.display = 'block';
        accInfo.style.display = 'none';
    });
}