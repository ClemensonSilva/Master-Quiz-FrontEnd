document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nomeInput = document.querySelector('input[placeholder="Nome da disciplina"]');
    const cargaHorariaInput = document.querySelector('input[placeholder="Carga horária"]');
    const cadastrarBtn = document.querySelector('button');

    cadastrarBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const nome = nomeInput.value.trim();
        const cargaHoraria = cargaHorariaInput.value.trim();

        // Validações
        if (nome === '') {
            alert('Por favor, preencha o nome da disciplina.');
            nomeInput.focus();
            return;
        }

        if (cargaHoraria === '') {
            alert('Por favor, preencha a carga horária.');
            cargaHorariaInput.focus();
            return;
        }

        if (!/^\d+$/.test(cargaHoraria)) {
            alert('A carga horária deve conter apenas números.');
            cargaHorariaInput.focus();
            return;
        }

        // Simulação de sucesso no cadastro
        alert('Disciplina cadastrada com sucesso!');
        window.location.href = 'dashboard-professor.html';
    });
});