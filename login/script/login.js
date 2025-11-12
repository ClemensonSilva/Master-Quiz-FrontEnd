document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Login realizado com sucesso!');
    window.location.href = "../aluno/dashboard-aluno.html";
});