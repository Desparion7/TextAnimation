const modal = document.querySelector('.modal');
const input = document.querySelector('.modal-input');
const modalBtn = document.querySelector('.modal-btn');
const saveBtn = document.querySelector('.save-btn');
const text = document.querySelector('.text');
const errorMsg = document.querySelector('.error-msg');

let inputValue = 'To jest testowa wiadomość';
let index = 1;
let speed = 80;

const writingAnimation = () => {
	text.innerHTML = inputValue.slice(0, index);
	index++;
	if (index > inputValue.length) return;
	setTimeout(writingAnimation, speed);
};
const openModal = () => {
	modal.classList.add('active');
};
const clearStuff = () => {
	input.value = '';
	errorMsg.textContent = '';
	index = 1;
};
const closeModal = () => {
	if (input.value === '') {
		errorMsg.textContent = 'Wprowadz wiadomość';
	} else {
		modal.classList.remove('active');
		inputValue = input.value;
		writingAnimation();
		clearStuff();
	}
};

modalBtn.addEventListener('click', openModal);
saveBtn.addEventListener('click', closeModal);
writingAnimation();
