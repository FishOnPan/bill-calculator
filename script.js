const price = document.querySelector('#price');
const peoples = document.querySelector('#peoples');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const cost = document.querySelector('.cost');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');

const showBill = () => {
    
    if (price.value == '' || peoples.value == '' || tip.value == 0) {
        error.textContent = 'Fill in all fields!';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        countBill();
    };
}

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeoples = parseInt(peoples.value);
    const newTip = parseFloat(tip.value);
    
    const sum = (newPrice + (newPrice * newTip)) / newPeoples;
    costInfo.style.display = 'block';

    cost.textContent = sum.toFixed(2);
    
    }



countBtn.addEventListener('click', showBill);