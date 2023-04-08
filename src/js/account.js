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

    // fetch('http://localhost:8026/login')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err));