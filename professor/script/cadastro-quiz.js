document.addEventListener('DOMContentLoaded', function() {
    // Função para deletar quiz
    const deleteButtons = document.querySelectorAll('button.text-gray-700.hover\\:text-gray-900');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nomeQuiz = this.closest('.grid').querySelector('p.text-md.font-medium').textContent;
            if (confirm(`Tem certeza que deseja excluir o quiz "${nomeQuiz}"?`)) {
                alert(`Quiz "${nomeQuiz}" excluído com sucesso!`);
                this.closest('.grid').remove();
            }
        });
    });
});