const numberInput = document.getElementById('number');
const btnSend = document.getElementById('btn');
const multiplierNumber = document.getElementById('result_text_number');
const errorMessage = document.querySelector('.error');
const resultBox = document.getElementById('exibition_screen_result');
const maxNumber = 11;

btnSend.addEventListener('click', () => {

    const multiplier = parseInt(numberInput.value);
    refreshResultList();

    if (multiplier > 10) {

        multiplierNumber.textContent = "";
        errorMessage.textContent = 'Somente números de 0 a 10'
        errorMessage.classList.add('visible');

        setTimeout(() => { errorMessage.classList.remove('visible')}, 2000);

    } else {

        multiplierNumber.textContent = multiplier;

        for (let i = 0; i < maxNumber; i++) {
            
            const m = document.createElement('span');
            m.classList.add('final_result');
            m.textContent = `${multiplier} x ${i} = ${multiplier * i}`;
            resultBox.appendChild(m);

        }

    }

});

function refreshResultList() {

    const n = document.querySelectorAll('.final_result');

    n.forEach((n) => { n.remove() });

}