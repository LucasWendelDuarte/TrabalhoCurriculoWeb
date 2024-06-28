document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const cadastrarButton = document.getElementById('cadastrar');
    const cancelarButton = document.getElementById('cancelar');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarButton.addEventListener('click', function() {
        const formData = new FormData(form);
        let resultHtml = '<h2>Dados Cadastrados</h2><ul>';
        formData.forEach((value, key) => {
            resultHtml += `<li><strong>${key}:</strong> ${value}</li>`;
        });
        resultHtml += '</ul>';
        resultadoDiv.innerHTML = resultHtml;
    });

    cancelarButton.addEventListener('click', function() {
        form.reset();
        resultadoDiv.innerHTML = '';
    });
});