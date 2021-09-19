const certas=["D", "B", "D", "C"];

const form= document.querySelector('.form');
const p= document.querySelector('p');
const div= document.querySelector('.result');
const span= div.querySelector('span');

const paragrafo= document.createElement('p');
paragrafo.classList.add('display-6');
p.insertAdjacentElement('afterend', paragrafo);

const getUsersAnswers= () => {

    let userAnswers= certas.map((_, index) => form[`question${index + 1}`].value);

    return userAnswers;
};

const showFinalScore= () => {
    scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
    div.classList.remove('d-none');
};


const func= event => {
    event.preventDefault();
    
    //? Obtem as respostas do Usuário.
    const respostaDoUsuario= getUsersAnswers();

    let score=0;

    //? Calcula a pontuação do Usuário.
    respostaDoUsuario.forEach( (item, index) => {
        const eIgual=item === certas[index];
     
        if(eIgual){
            score += 25;
        };
    });
    

    //? Exibe a Pontuação Final.
    showFinalScore();

    //? Anima a Pontuação Final.
    let count=0;
    const timer= setInterval(() => {
        const isEqual= count === score;

        if(isEqual){
            clearInterval(timer);
        }
        span.textContent=`${count}%`;
        count++;

    }, 15);
}


form.addEventListener('submit', func);
