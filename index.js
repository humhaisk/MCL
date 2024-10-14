
const socket = io('http://localhost:5000');

// Listen for color updates from the server
socket.on('l-bar-up', () => {
    const bar2 = document.querySelector('.bar2');
    bar2.classList.add('show');
});
socket.on('l-bar-down', () => {
    const bar2 = document.querySelector('.bar2');
    bar2.classList.remove('show');
});
socket.on('r-bar-up', () => {
    const bar1 = document.querySelector('.bar1');
    bar1.classList.add('show');
});
socket.on('r-bar-down', () => {
    const bar1 = document.querySelector('.bar1');
    bar1.classList.remove('show');
});