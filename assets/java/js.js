const game = document.querySelector('.full');
const start = document.querySelector('.Comeco');
const startB = document.querySelector('.start');

game.style.display = 'none';
start.style.display = 'flex';

function startI() {
    game.style.display = 'flex';
    start.style.display = 'none';
    const body = document.body;
    body.style.background = 'none';
    const jumpAudio = new Audio('assets/audios/smw_jump.wav');
    const player = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.cloud');
    const over = document.querySelector('.game-over');
    const restartB = document.querySelector('.restart');

    const score = document.querySelector('.score');
    const highScoreElement = document.querySelector('.highScore');

    let currentScore = 0;
    let scoreInterval;
    let speedInterval; 


    let pipeSpeed = 1.5; 
    const pipeSpeedDecrease = 0.05;
    const pipeSpeedMin = 0.5; 

   
    let highScore = localStorage.getItem('highScore') || 0;
    highScoreElement.textContent = highScore;


    currentScore = 0;
    score.textContent = currentScore;


    score.style.display = 'flex';



    const updatePipeSpeed = () => {
        if (pipeSpeed > pipeSpeedMin) {
            pipeSpeed -= pipeSpeedDecrease;

            pipe.style.animation = `pipe-animations ${pipeSpeed}s infinite linear`;
        } else {
        
            clearInterval(speedInterval);
        }
    };

    scoreInterval = setInterval(() => {
        currentScore++;
        score.textContent = currentScore;

        
    }, 500);



    

    speedInterval = setInterval(updatePipeSpeed, 5000);

    const jump = () => {
        player.classList.add('jump');

        jumpAudio.currentTime = 0;
        jumpAudio.play().catch(erro => {
            console.error('Erro ao tocar o áudio:', erro);
        });
        setTimeout(() => {
            player.classList.remove('jump');
        }, 500);
    }

    let circulo = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const playerp = +window.getComputedStyle(player).bottom.replace('px', '');
        const nuvemp = +window.getComputedStyle(nuvem).left.replace('px', '');

        if (pipePosition <= 100 && pipePosition > 0 && playerp < 60) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            player.style.animation = 'none';
            player.style.bottom = `${playerp}px`;

            player.src = 'assets/images/game-over.png';
            player.style.width = '70px';
            player.style.marginLeft = '35px';

            nuvem.style.animation = 'cloud 20s infinite linear';
            nuvem.style.left = `${nuvemp}px`;

            over.style.visibility = 'visible';

  
            clearInterval(circulo);
            clearInterval(scoreInterval);
            clearInterval(speedInterval); 


            if (currentScore > highScore) {
                highScore = currentScore;
                highScoreElement.textContent = highScore;
                localStorage.setItem('highScore', highScore);
            }

       
         
    
            score.style.opacity = '0.5'; 
        }
    }, 10);

    const restart = () => {
        over.style.visibility = 'hidden';
        score.style.opacity = '1'; 

        pipe.style.animation = `pipe-animations ${pipeSpeed}s infinite linear`; 

        pipe.style.animation = 'pipe-animations 1.5s infinite linear';
        pipe.style.left = ``;

        player.src = 'assets/images/mario.gif';
        player.style.width = '130px';
        player.style.bottom = '0px';
        player.style.marginLeft = '';
        player.style.animation = '';

        nuvem.style.left = ``;


        currentScore = 0;
        score.textContent = currentScore;


        clearInterval(scoreInterval);
        clearInterval(speedInterval);
        clearInterval(circulo);


        pipeSpeed = 1.5;

   
        scoreInterval = setInterval(() => {
            currentScore++;
            score.textContent = currentScore;
        }, 500);


        speedInterval = setInterval(updatePipeSpeed, 5000);


        circulo = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const playerp = +window.getComputedStyle(player).bottom.replace('px', '');
            const nuvemp = +window.getComputedStyle(nuvem).left.replace('px', '');

            if (pipePosition <= 100 && pipePosition > 0 && playerp < 60) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                player.style.animation = 'none';
                player.style.bottom = `${playerp}px`;

                player.src = 'assets/images/game-over.png';
                player.style.width = '70px';
                player.style.marginLeft = '35px';

                nuvem.style.animation = 'cloud 20s infinite linear';
                nuvem.style.left = `${nuvemp}px`;

                over.style.visibility = 'visible';

                clearInterval(circulo);
                clearInterval(scoreInterval);
                clearInterval(speedInterval);

                if (currentScore > highScore) {
                    highScore = currentScore;
                    highScoreElement.textContent = highScore;
                    localStorage.setItem('highScore', highScore);
                }

    
                score.style.opacity = '0.5'; 
            }
        }, 10);
    }

    const revive = () => {
        over.style.visibility = 'hidden';
        reviveB.style.display = 'none'; 
        score.style.opacity = '1'; 


        player.src = 'assets/images/mario.gif';
        player.style.width = '130px';
        player.style.bottom = '0px';
        player.style.marginLeft = '';
        player.style.animation = '';


        nuvem.style.animation = 'cloud 20s infinite linear';
        nuvem.style.left = ``;


        pipe.style.animation = 'pipe-animations 1.5s infinite linear';
        pipe.style.left = ``;


        currentScore = 0;
        score.textContent = currentScore;


        clearInterval(scoreInterval);
        clearInterval(speedInterval);
        clearInterval(circulo);


        pipeSpeed = 1.5;

  
        scoreInterval = setInterval(() => {
            currentScore++;
            score.textContent = currentScore;
        }, 500);


        speedInterval = setInterval(updatePipeSpeed, 5000);

  
        circulo = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const playerp = +window.getComputedStyle(player).bottom.replace('px', '');
            const nuvemp = +window.getComputedStyle(nuvem).left.replace('px', '');

            if (pipePosition <= 100 && pipePosition > 0 && playerp < 60) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                player.style.animation = 'none';
                player.style.bottom = `${playerp}px`;

                player.src = 'assets/images/game-over.png';
                player.style.width = '70px';
                player.style.marginLeft = '35px';

                nuvem.style.animation = 'cloud 20s infinite linear';
                nuvem.style.left = `${nuvemp}px`;

                over.style.visibility = 'visible';

                clearInterval(circulo);
                clearInterval(scoreInterval);
                clearInterval(speedInterval);

                if (currentScore > highScore) {
                    highScore = currentScore;
                    highScoreElement.textContent = highScore;
                    localStorage.setItem('highScore', highScore);
                }
                
    
                score.style.opacity = '0.5'; 
            }
        }, 10);
    }

    

    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump);

    restartB.addEventListener('click', restart);

}

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.corP');
    const text = textElement.textContent;
    textElement.innerHTML = '';

    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.restartT');
    const text = textElement.textContent;
    textElement.innerHTML = '';

    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);
    }
});



