document.addEventListener('DOMContentLoaded', function() {
    const adicionarBtn = document.querySelector('button.bg-quiz-dark');
    const editarButtons = document.querySelectorAll('button.bg-quiz-dark');
    const excluirButtons = document.querySelectorAll('button.bg-red-600');

    // Função para adicionar nova questão
    adicionarBtn.addEventListener('click', function() {
        const descricao = prompt('Digite a descrição da questão:');
        if (descricao && descricao.trim() !== '') {
            const alternativas = prompt('Digite as alternativas (separadas por vírgula):\nEx: a) Opção A, b) Opção B, c) Opção C, d) Opção D');
            
            // Criar nova questão
            criarNovaQuestao(descricao, alternativas);
            alert('Questão adicionada com sucesso!');
        }
    });

    // Função para criar nova questão
    function criarNovaQuestao(descricao, alternativas) {
        const container = document.querySelector('.space-y-6');
        const novaQuestao = document.createElement('div');
        novaQuestao.className = 'bg-quiz-light-gray p-5 rounded-lg border border-gray-200';
        
        let alternativasHTML = '';
        if (alternativas) {
            const alternativasArray = alternativas.split(',');
            alternativasHTML = '<div class="space-y-1 mb-4">';
            alternativasArray.forEach(alt => {
                alternativasHTML += `<p class="text-sm text-gray-600">${alt.trim()}</p>`;
            });
            alternativasHTML += '</div>';
        }

        novaQuestao.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Questão ${container.children.length + 1}</h3>
            <p class="text-sm text-gray-600 mb-4">${descricao}</p>
            ${alternativasHTML}
            <div class="flex space-x-2">
                <button class="bg-quiz-dark text-white py-1 px-3 rounded text-xs font-medium hover:bg-gray-800 editar-btn">
                    Editar
                </button>
                <button class="bg-red-600 text-white py-1 px-3 rounded text-xs font-medium hover:bg-red-700 excluir-btn">
                    Excluir
                </button>
            </div>
        `;

        container.appendChild(novaQuestao);
        adicionarEventosBotoes(novaQuestao);
    }

    // Função para editar questão
    function adicionarEventosBotoes(questaoElement) {
        const editarBtn = questaoElement.querySelector('.editar-btn');
        const excluirBtn = questaoElement.querySelector('.excluir-btn');

        editarBtn.addEventListener('click', function() {
            const descricaoAtual = questaoElement.querySelector('p.text-sm.text-gray-600').textContent;
            const novaDescricao = prompt('Edite a descrição da questão:', descricaoAtual);
            
            if (novaDescricao && novaDescricao.trim() !== '') {
                questaoElement.querySelector('p.text-sm.text-gray-600').textContent = novaDescricao;
                alert('Questão atualizada com sucesso!');
            }
        });

        excluirBtn.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja excluir esta questão?')) {
                questaoElement.remove();
                alert('Questão excluída com sucesso!');
                // Renumerar questões restantes
                renumerarQuestoes();
            }
        });
    }

    // Função para renumerar questões após exclusão
    function renumerarQuestoes() {
        const questoes = document.querySelectorAll('.bg-quiz-light-gray.p-5.rounded-lg');
        questoes.forEach((questao, index) => {
            const titulo = questao.querySelector('h3.text-lg.font-semibold');
            titulo.textContent = `Questão ${index + 1}`;
        });
    }

    // Adicionar eventos aos botões existentes
    editarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questaoElement = this.closest('.bg-quiz-light-gray');
            const descricaoAtual = questaoElement.querySelector('p.text-sm.text-gray-600').textContent;
            const novaDescricao = prompt('Edite a descrição da questão:', descricaoAtual);
            
            if (novaDescricao && novaDescricao.trim() !== '') {
                questaoElement.querySelector('p.text-sm.text-gray-600').textContent = novaDescricao;
                alert('Questão atualizada com sucesso!');
            }
        });
    });

    excluirButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questaoElement = this.closest('.bg-quiz-light-gray');
            if (confirm('Tem certeza que deseja excluir esta questão?')) {
                questaoElement.remove();
                alert('Questão excluída com sucesso!');
                renumerarQuestoes();
            }
        });
    });
});