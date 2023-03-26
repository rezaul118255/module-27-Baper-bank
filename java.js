document.getElementById('button').addEventListener('click', function () {
    const emailfiled = document.getElementById('Email');
    const email = emailfiled.value;
    const passwordfiled = document.getElementById(' Password');
    const password = passwordfiled.value;

    if ('email === reza@.com' && password === '123') {
        window.location.href = 'bank.html'
    }
    else {
        alert('tuii password vule gasis !!! toke ami tajjo puto korlam')
    }
})