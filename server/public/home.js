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
    