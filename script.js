document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileToUpload');
    const uploadButton = document.getElementById('uploadButton');

    uploadButton.addEventListener('click', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const newHtmlContent = e.target.result;

                // Atualize o conteúdo da página atual com o novo HTML
                document.body.innerHTML = newHtmlContent;
            };

            // Leia o arquivo carregado como texto
            reader.readAsText(file);
        } else {
            alert('Selecione um arquivo para enviar.');
        }
    });
});
