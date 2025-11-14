document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastroQuiz');
    const nomeQuizInput = document.getElementById('nomeQuiz');
    const disciplinaSelect = document.getElementById('disciplinaQuiz');
    const descricaoTextarea = document.getElementById('descricaoQuiz');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nomeQuiz = nomeQuizInput.value.trim();
        const disciplina = disciplinaSelect.value;
        const descricao = descricaoTextarea.value.trim();

        // Validações
        if (nomeQuiz === '') {
            alert('Por favor, preencha o nome do quiz.');
            nomeQuizInput.focus();
            return;
        }

        if (disciplina === '') {
            alert('Por favor, selecione uma disciplina.');
            disciplinaSelect.focus();
            return;
        }

        // Simulação de sucesso no cadastro
        alert(`Quiz "${nomeQuiz}" cadastrado com sucesso!\n`);
        
        // Redirecionar para página de questões
        window.location.href = 'questoes.html';
    });
});