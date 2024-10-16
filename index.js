
const socket = io('https://mcl.onrender.com');

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

socket.on('updated-bid',({i,v})=>{
    console.log(i)
    const bidElement = document.querySelector('.bid'); // Select the bid element
    const preval = Number(bidElement.innerHTML); 
    const newValue = preval + Number(i); 
    console.log(newValue)
    bidElement.innerHTML = newValue;   
     document.querySelector('.team').innerHTML = v
})

socket.on('reset',()=>{
    const bidElement = document.querySelector('.bid');
    const newValue = 0; 
    console.log(newValue)
    bidElement.innerHTML = newValue;   
     document.querySelector('.team').innerHTML = ""
})

socket.on('text-added',(input)=>{
    console.log(input)
    document.querySelector('#output').textContent = input;
    const bar1 = document.querySelector('.bar1');
    bar1.classList.add('show');
})

socket.on('player-update', (player) => {

    
    // Create the formatted HTML string
    const playerInfoHTML = `Player name : ${player.name}
Year :${player.year}
Role :${player.role}`;
    
    //const fullPath = player.pic;
    //const filename = fullPath.split('/').pop();
    // Set the innerHTML of output2 to the formatted HTML
    document.querySelector('#output2').textContent = playerInfoHTML;
    document.querySelector('#profile').src='server'+player.pic

    const bar2 = document.querySelector('.bar2');
    bar2.classList.add('show');
});
