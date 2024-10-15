const socket = io('https://mcl.onrender.com');

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

    socket.emit('updated-bid',({i:incrementValue,v: teamValue}))

    console.log('Increment Number:', incrementValue);
    console.log('Selected Team:', teamValue);
    if (teamField) {
        teamField.checked = false;  // Clear selected radio button
    }
});

document.querySelector('#reset').addEventListener('click',()=>{
    console.log('clicked reset')
    socket.emit('reset')
})

document.querySelector('#addtext').addEventListener('click',(e)=>{
    console.log('clicked')
    const input = document.getElementById('userInput').value;
    socket.emit('text-added',(input))
})
    
document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const slno = document.getElementById('search').value;

    try {
        const response = await fetch(`/player/${slno}`);
        if (response.ok) {
            const player = await response.json();
            displayPlayer(player);  // Call the function to display player data
        } else {
            document.querySelector('.contacts').innerHTML = 'Player not found';
        }
    } catch (error) {
        console.error('Error fetching player data:', error);
        document.querySelector('.contacts').innerHTML = 'Error fetching player data';
    }
});

// Function to display the player's data in the .contacts div
function displayPlayer(player) {
    const contactsDiv = document.querySelector('.contacts');
    contactsDiv.innerHTML = `
        <div class='data'>
            <p><strong>Sl. No.:</strong> ${player.slno}</p>
            <p><strong>Name:</strong> ${player.name}</p>
            <p><strong>Year:</strong> ${player.year}</p>
            <p><strong>Role:</strong> ${player.role}</p>
            <img src="${player.pic}" alt="${player.name}" width="150">
        </div>
        <button id='send'>Send</button>
    `;
    document.querySelector('#send').addEventListener('click',()=>{
        socket.emit('player-update',(player))
    })
}
