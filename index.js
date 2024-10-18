
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
    const infos =document.querySelector('.infos')
    infos.classList.add('unrolled')
    const bidElement = document.querySelector('.bid'); // Select the bid element
    const bidElement2 = document.querySelector('.bid2'); 
    const preval = Number(bidElement.innerHTML); 
    const newValue = preval + Number(i); 
    console.log(newValue)
    bidElement.innerHTML = newValue;   
    bidElement2.innerHTML = newValue;   
    document.querySelector('.team').innerHTML = v
    document.querySelector('.team2').innerHTML = v
})

socket.on('reset',()=>{
    const infos =document.querySelector('.infos')
    infos.classList.remove('unrolled')
    const infos2 =document.querySelector('.infos2')
    infos2.classList.remove('unrolled')
    const bidElement = document.querySelector('.bid');
    const bidElement2 = document.querySelector('.bid2');
    const newValue = 0; 
    console.log(newValue)
    bidElement.innerHTML = newValue;   
    bidElement2.innerHTML = newValue;   
    document.querySelector('.team').innerHTML = ""
    document.querySelector('.team2').innerHTML = ""
    const playerbar= document.querySelector('.profile-img-pic')
    playerbar.classList.remove('show')
    document.querySelector('#output').textContent = "";
    const bar1 = document.querySelector('.bar1');
    bar1.classList.remove('show');
    const bar2 = document.querySelector('.bar2');
    bar2.classList.remove('show');
    const bar = document.querySelector('.infos2');
    bar.classList.remove('show')
    const proi = document.querySelector('.profile-img')
    proi.classList.remove('show')

})

socket.on('text-added',(input)=>{
    console.log(input)
    document.querySelector('#output').textContent = input;
    const bar1 = document.querySelector('.bar1');
    bar1.classList.add('show');
})

socket.on('player-update', (player) => {

    const playerbar= document.querySelector('.profile-img-pic')
    const bar2 = document.querySelector('.bar2');

    bar2.classList.remove('show');
    playerbar.classList.remove('show')
    
    // Create the formatted HTML string
    const playerInfoHTML = `Player name : ${player.name}
Year :${player.year}
Role :${player.role}`;
    
    //const fullPath = player.pic;
    //const filename = fullPath.split('/').pop();
    // Set the innerHTML of output2 to the formatted HTML
    document.querySelector('#output2').textContent = playerInfoHTML;
    document.querySelector('#profile').src='server'+player.pic

    const proi = document.querySelector('.profile-img')
    proi.classList.add('show')


    bar2.classList.add('show');
    playerbar.classList.add('show')
});

socket.on('sold',()=>{
    const infos =document.querySelector('.infos')
    infos.classList.remove('unrolled')
    const bar = document.querySelector('.infos2');
    bar.classList.add('show')
})
