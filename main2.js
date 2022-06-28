const getGuess = document.querySelector('#getGuess');

const findBtn = document.querySelector('#findBtn');

const result = document.querySelector('#result');
const findedNumber = document.querySelector('#findedNumber')
const max_score = document.querySelector('#max_score');
const reset = document.querySelector('#reset');
const higherScore = document.querySelector('#higherScore')

let score = [];

let maxNumber = 20;

let rand = Math.floor(Math.random()*20) + 1;

findBtn.addEventListener('click', function(){
    if(maxNumber > 0){
        if(getGuess.value !== ''){
            if(getGuess.value > 20){
                result.innerHTML = 'max 20'
            }else if(getGuess.value < 0){
                result.innerHTML = 'min 0'
            }else {
                if(getGuess.value == rand){
                    result.innerHTML = 'You Win';
                    findedNumber.innerHTML = `You Find ${rand}`;
                    score.push(maxNumber);
                    higherScore.innerHTML = Math.max(...score);
                    document.querySelector('body').style.backgroundColor = 'green';

                    
                }else if(getGuess.value < rand){
                    result.innerHTML = 'Lower';
                    maxNumber --
                }else if(getGuess.value > rand){
                    result.innerHTML = 'Higher';
                    maxNumber--
                }
    
                max_score.innerHTML = maxNumber
            } 
        }
    }else {
        result.innerHTML = 'You Lost';
    }
    
});

reset.addEventListener('click', function(){
    maxNumber = 20;
    rand = Math.floor(Math.random()*20) + 1;
    result.innerHTML = '';
    max_score.innerHTML = 20;
    getGuess.value = '';
    document.querySelector('body').style.backgroundColor = 'white'
    console.log(rand);
})
console.log(rand)


