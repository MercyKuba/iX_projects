
const numInput = document.getElementById('numGuess-input')
const buttonInput = document.getElementById('button')
const card = document.getElementById('card-body')
const res = document.getElementById('result')


buttonInput.addEventListener('click', (event) => {
    
    const num = numInput.value;

    let random = Math.floor(Math.random() * 11);
    // console.log(result)
    
    const resultDiv = document.createElement('div') 

    if (num == random) {
        resultDiv.innerHTML = 'You guessed correctly!';
        resultDiv.classList.add('alert-success');
    } else {
        resultDiv.innerHTML = 'Wrong! Random number is: ' + random;
        resultDiv.classList.add('alert-danger');

    }

    resultDiv.classList.add('alert');
    resultDiv.classList.add('mt-4');
    resultDiv.classList.add('text-center');
    res.innerHTML = ''
    res.append(resultDiv)

})