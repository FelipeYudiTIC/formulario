document.getElementById('circularForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const setor = document.getElementById('setor').value;
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;

    const dados = {
      setor: setor,
      titulo: titulo,
      conteudo: conteudo
    };

    // Envia os dados para o Google Script
    fetch('https://script.google.com/macros/s/AKfycbwaC1kDrj7RSVxUw-V4VVOMRJwYAFVVb-fAfIgKdaHAiP8pMIXNAV2XZXPxFXaI6ENV0Q/exec', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(() => {
      // Exibe a mensagem de sucesso
      document.getElementById('message').style.display = 'block';
      // Limpa o formulário
      document.getElementById('circularForm').reset();
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});