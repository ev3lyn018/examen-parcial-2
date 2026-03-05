document.getElementById('CargarContenido').addEventListener('click', function() {
    const pdfInput = document.getElementById('SubirPdf');
        const pdfFile = pdfInput.files[0];

        if (pdfFile) {
            const pdfUrl = URL.createObjectURL(pdfFile);
            console.log(pdfUrl); 
            document.getElementById('MostrarPdf').src = pdfUrl;
        } else {
            alert('Por favor, selecciona un archivo PDF.');
        }
});