document.getElementById('player-data').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const slno =document.getElementById('slno').value;
    const name= document.getElementById('name').value;
    const year =document.getElementById('year').value;
    const role =document.getElementById('role').value;

    const photoFile = document.getElementById('photo').files[0]; // Get the image file

    // Set size limit (e.g., 2 MB)
    const maxSize = 2 * 1024 * 1024; // 2 MB in bytes

    if (photoFile) {
        // Check file size
        if (photoFile.size > maxSize) {
            alert('File size exceeds the 2 MB limit. Please choose a smaller file.');
            return; // Stop processing if file is too large
        }

        const reader = new FileReader();

        reader.onload = async () => {
            const pic = reader.result; // Get the data URL of the image
            const previewContainer = document.getElementById('image-preview');
            previewContainer.innerHTML = ''; // Clear previous previews
            const imgPreview = document.createElement('img');
            imgPreview.src = pic;
            imgPreview.style.width = '150px'; // Set preview size
            imgPreview.style.height = 'auto';
            previewContainer.appendChild(imgPreview);
            console.log(pic,slno,name,year,role)

            try {
                const response = await fetch('/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set Content-Type to JSON
                    },
                    body: JSON.stringify({pic:pic,slno,name,year,role}), // Send the formData object
                });
                const data = await response.json();
                console.log(data);
                alert('Player data submitted successfully!');

                // Refresh the form fields after successful submission
                document.getElementById('slno').value = '';
                document.getElementById('name').value = '';
                document.getElementById('year').value = '';
                document.getElementById('role').value = '';
                document.getElementById('photo').value = ''; // Clear the file input
                previewContainer.innerHTML = ''; // Clear preview
            } catch (error) {
                console.error('Error submitting player data:', error);
            }
        };

        reader.readAsDataURL(photoFile); // Read the file as a data URL
    } else {
        alert('Please select a photo to upload.'); // Handle no file selected
    }
});

document.querySelector('#players').addEventListener('click',async()=>{
    window.location.href = '/players';
})
