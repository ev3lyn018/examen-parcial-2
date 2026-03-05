document.getElementById('CargarContenido').addEventListener('click', function() {

        const imageInput = document.getElementById('SubirImagen');
        const imageFile = imageInput.files[0];

        const audioInput = document.getElementById('SubirAudio');
        const audioFile = audioInput.files[0];

        const videoInput = document.getElementById('SubirVideo');
        const videoFile = videoInput.files[0];

        if (imageFile) {
            const imageReader = new FileReader();
            imageReader.onload = function(e) {
                const imageUrl = e.target.result;
                console.log(imageUrl); 
                document.getElementById('MostrarImagen').src = imageUrl;
            };
            imageReader.readAsDataURL(imageFile);
        } else {
            alert('Por favor, selecciona una imagen.');
        }

        if (audioFile) {
            const audioUrl = URL.createObjectURL(audioFile);
            console.log(audioUrl); 
            const audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audioUrl;
            document.body.appendChild(audioElement);
        } else {
            alert('Por favor, selecciona un archivo de audio.');
        }

        if (videoFile) {
            const videoUrl = URL.createObjectURL(videoFile);
            console.log(videoUrl); 
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.src = videoUrl;
            document.body.appendChild(videoElement);
        } else {
            alert('Por favor, selecciona un archivo de video.');
        }
});

document.getElementById("boton").addEventListener("click", function() {
    let color = document.getElementById("color").value;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
});