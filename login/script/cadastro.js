document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    alert('Cadastro realizado com sucesso!');
    window.location.href = "/aluno/dashboard-aluno.html";
});