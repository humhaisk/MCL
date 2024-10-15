const socket = io('http://localhost:5000');

document.querySelector('.lup').addEventListener('click', () => {
    console.log('l up clicked')
    socket.emit('l-bar-up'); 
});
document.querySelector('.ldown').addEventListener('click', () => {
    console.log('l down clicked')
    socket.emit('l-bar-down'); 
});
document.querySelector('.rup').addEventListener('click', () => {
    console.log('r up clicked')
    socket.emit('r-bar-up'); 
});
document.querySelector('.rdown').addEventListener('click', () => {
    console.log('r down clicked')
    socket.emit('r-bar-down'); 
});

document.querySelector('#sb-btn').addEventListener('click', (event) => {
    event.preventDefault();

    const incrementField = document.querySelector('#increment')
    const incrementValue = document.querySelector('#increment').value;

    const teamField = document.querySelector('input[name="team"]:checked')
    const teamValue = document.querySelector('input[name="team"]:checked')?.value;

    socket.emit('updated-bid',{incrementValue, teamValue})

    console.log('Increment Number:', incrementValue);
    console.log('Selected Team:', teamValue);
    incrementField.value = "";  // Clear increment input
    if (teamField) {
        teamField.checked = false;  // Clear selected radio button
    }
});

    