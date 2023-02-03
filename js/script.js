//** Variables */
const form = document.querySelector('#form_canculator');
const resultOperation = document.querySelector('#results');
const opSuma = document.querySelector('#suma');
const opResta = document.querySelector('#resta');
const opMultiplica = document.querySelector('#mult');
const opDivide = document.querySelector('#divide');
const cont_history = document.querySelector('#cont_history');
const clearHistory = document.querySelector('#clear_history');
let history = [];

//** Operations - funtions suma */
const Sumar = (num1, num2) => {
	history.push(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
	opSuma.setAttribute('checked', 'checked');
	return Number(num1) + Number(num2);
};

//** Operations - funtions resta */
const Resta = (num1, num2) => {
	history.push(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
	opResta.setAttribute('checked', 'checked');
	return Number(num1) - Number(num2);
};

//** Operations - funtions multiplicaón */
const Mult = (num1, num2) => {
	history.push(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
	opMultiplica.setAttribute('checked', 'checked');
	return Number(num1) * Number(num2);
};

//** Operations - funtions divición */
const Dividir = (num1, num2) => {
	history.push(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
	opDivide.setAttribute('checked', 'checked');
	return Number(num1) / Number(num2);
};

//** Save history */
const saveHistory = () => {
	localStorage.setItem('storage', JSON.stringify(history));
	showHistory();
};

const showHistory = () => {
	cont_history.innerHTML = '';
	history = JSON.parse(localStorage.getItem('storage'));

	if (history === null) {
		history = [];
	} else {
		history.map((g) => {
			cont_history.innerHTML += `<p class="histori_operation">${g}</p>`;
		});
	}
};

clearHistory.addEventListener('click', () => {
	if (window.confirm('¿Estás seguro de borrar el historial?')) {
		localStorage.removeItem('storage');
		showHistory();
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let numOnem = document.querySelector('#nunOne').value;
	let numTwo = document.querySelector('#nunTwo').value;
	let result = '';

	//** Indicate the operation to perform */
	if (opSuma.checked) {
		result = Sumar(numOnem, numTwo);
	}

	if (opResta.checked) {
		result = Resta(numOnem, numTwo);
	}

	if (opMultiplica.checked) {
		result = Mult(numOnem, numTwo);
	}

	if (opDivide.checked) {
		result = Dividir(numOnem, numTwo);
	}

	//** Print result */
	resultOperation.innerHTML = `Resultado: ${result}`;

	//** Clear the form */
	form.reset();

	//** Save History */
	saveHistory();
});

document.querySelector('DOMContentioaded', showHistory);
