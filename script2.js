document.getElementById('CargarContenido').addEventListener('click', function() {
        const fileInput = document.getElementById('SubirArchivo');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const contents = e.target.result;
                console.log(contents); 
                document.getElementById('MostrarContenido').textContent = contents;
            };
            reader.readAsText(file);
        } else {
            alert('Por favor, selecciona un archivo.');
        }
});

document.getElementById("boton").addEventListener("click", function() {
    let email = document.getElementById("correo").value;
    let password = document.getElementById("contraseña").value;

    console.log("boton presionado. correo ingresado: " + email);
    console.log("boton presionado. contraseña ingresada " + password);

    document.getElementsByTagName("p")[1].innerHTML = "el correo ingresado es: " + email;
    document.getElementsByTagName("p")[2].innerHTML = "la contraseña ingresada es: " + password;
});