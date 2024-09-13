document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const gameDiv = document.getElementById('game');
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    const levelDiv = document.getElementById('level');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Perguntas sobre escolhas e conhecimentos no mundo de Vox Machina
    const questions = [
        {
            question: 'Você está em uma taverna bebendo, quando vê um homem cinza enorme, ele te chamou para beber. O que você faz?',
            options: [
                'Recusa, não ia aguentar beber com um titã.',
                'Recusa e o confronta, quer brigar com ele.',
                'Propõe um desafio de quem bebe mais.',
                'Aceita, gostaria de ser amigo dele.',
            ],
            answer: 3 // Melhor opção para sobreviver e divertir
        },
        {
            question: 'Você se encontra com um anão do grupo Vox Machina, ele te propõe um dueto de música. O que você faz?',
            options: [
                'Aceita, você é fã dele.',
                'Recusa, afinal ele é um anão e você odeia eles.',
                'Você viu ele fletar com todas do local, então recusa.',
                'Você o convida pra outra coisa.',
            ],
            answer: 0 // Melhor opção para ser amigo do grupo vox machina
        },
        {
            question: 'Você está diante do conselho, uma moça loira te chama. Qual nome dela?',
            options: [
                'Lady Kima.',
                'Catyrine.',
                'Allura',
                'Não importa, vou fletar com ela.',
            ],
            answer: 2 // Melhor opção para não ser preso
        },
        {
            question: 'Você está na cidade de Whitestone. Qual o nome dos governadores atuais?',
            options: [
                'Duque De Rollo.',
                'Percy De Rolo II.',
                'Briarwoods.',
                'Shorthalt.',
            ],
            answer: 2 // A resposta correta
        },
        {
            question: 'Você está andando com a meia-elfa maga do grupo. Ela é uma Ashira de qual elemento?',
            options: [
                'Fogo.',
                'Ar.',
                'Floresta.',
                'Animais.',
            ],
            answer: 1 // Opção certa
        },
        {
            question: 'Você encontra um dragão com seu grupo. O que você faz?',
            options: [
                'Seduz ele com seu charme.',
                'Tenta matar ele sozinho.',
                'Recua e faz um plano de ataque surpresa.',
                'Dane-se os planos, vamos com tudo pra cima dele.',
            ],
            answer: 2 // Melhor opção para ficar vivo
        },
        {
            question:'Você está no mundo féerico e vê uma gosma. O que você faz?',
            options: [
                'Cheira ele.',
                'Joga água nele.',
                'Queima ele.',
                'Eletrecuta ele.',
            ],
            answer: 3 // Melhor opção para sobreviver
        },
        {
            question: 'Você está em frente ao pai de Vex e Vax. Como você devê chama-lo?',
            options: [
                'Ow tio elfo.',
                'Ai papai.',
                'Syldor Vessar..',
                'Lorde Vix Tolken D`Valin.',
            ],
            answer: 2 // Resposta certa
        },
        {
            question: 'Você está conversando com Pike sobre a deusa dela. Quais poderes ela concede?',
            options: [
                'Cura.',
                'Luz.',
                'Sombras.',
                'Invocação.',
            ],
            answer: 0 // Resposta certa
        },
        {
            question: 'Você está na frente do dragão que atacou Emon. Qual o nome dele?',
            options: [
                'Banguela.',
                'Chroma Conclave.',
                'Caraxes.',
                'Drakonar.',
            ],
            answer: 1 // resposta certa
        },
        {
            question: 'Você shippa Vax e Keyleth?',
            options: [
                'Claro, fofos.',
                'Meu casal favorito.',
                'obviooo.',
                'Nâo, apenas não.',
            ],
            answer: 3 // ai de vc se responder errado
        }
    ];

    let currentLevel = 0;

    function showQuestion(level) {
        const question = questions[level];
        questionDiv.textContent = question.question;
        optionsDiv.innerHTML = '';

        question.options.forEach((option, idx) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'answer-btn';
            button.addEventListener('click', () => handleOptionClick(idx, question.answer));
            optionsDiv.appendChild(button);
        });

        levelDiv.textContent = `Nivel: ${level + 1}`;
    }

    function handleOptionClick(selectedIndex, correctIndex) {
        if (selectedIndex === correctIndex) {
            if (currentLevel + 1 >= questions.length) {
                questionDiv.textContent = 'Você completou todos os níveis! Parabéns!';
                optionsDiv.innerHTML = '';
                restartButton.classList.remove('hidden');
            } else {
                currentLevel++;
                showQuestion(currentLevel);
            }
        } else {
            questionDiv.textContent = 'Resposta errada. Tente novamente!';
            optionsDiv.innerHTML = '';
            setTimeout(() => showQuestion(currentLevel), 2000); // Repetir a pergunta após 2 segundos
        }
    }

    function restartGame() {
        currentLevel = 0;
        showQuestion(currentLevel);
        restartButton.classList.add('hidden');
    }

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        gameDiv.classList.remove('hidden');
        showQuestion(currentLevel);
    });

    restartButton.addEventListener('click', restartGame);
});

script