document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados do gráfico (em uma aplicação real, viria da API)
    const dadosQuestoes = [
        { questao: 'Q1', acertos: 80, cor: 'bg-green-500' },
        { questao: 'Q2', acertos: 25, cor: 'bg-red-500' },
        { questao: 'Q3', acertos: 50, cor: 'bg-yellow-500' },
        { questao: 'Q4', acertos: 80, cor: 'bg-green-500' },
        { questao: 'Q5', acertos: 65, cor: 'bg-green-500' }
    ];

    // Função para atualizar o gráfico (exemplo básico)
    function atualizarGrafico() {
        const containerGrafico = document.querySelector('.flex.items-end.space-x-4');
        containerGrafico.innerHTML = '';

        dadosQuestoes.forEach(dado => {
            const barra = document.createElement('div');
            barra.className = 'flex flex-col items-center';
            barra.innerHTML = `
                <div class="${dado.cor} w-10 rounded-t" style="height: ${dado.acertos * 1.6}px;"></div>
                <span class="text-xs mt-1">${dado.questao}</span>
            `;
            containerGrafico.appendChild(barra);
        });
    }

    // Inicializar gráfico
    atualizarGrafico();
});