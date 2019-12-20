//DOM elements
const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');

const showAmPm = true;

// Show time
function showTime() {
	// let today = new Date(2019, 06, 10, 20, 33, 30),
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	//set AM or PM
	const amPM = hour >= 12 ? 'PM' : 'AM';

	// 12hr Format
	hour = hour % 12 || 12;
	//Output time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;

	setTimeout(showTime, 1000);
}

//add zero
function addZero(digit) {
	return (parseInt(digit, 10) < 10 ? '0' : '') + digit;
}

// set background & greeting
function setBgGreet() {
	// let today = new Date(2019, 06, 10, 20, 33, 30),
	let today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		//morning
		document.body.style.backgroundImage = "url('https://source.unsplash.com/tSR133k8Diw')";
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundSize = 'cover';
		greeting.textContent = 'Good Morning';
	} else if (hour < 18) {
		//Afternoon
		document.body.style.backgroundImage = "url('https://source.unsplash.com/eew2Sz9U5WY')";
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundSize = 'cover';
		greeting.textContent = 'Good Afternoon';
	} else {
		//evening
		document.body.style.backgroundImage = "url('https://source.unsplash.com/SQfRrFwECic')";
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundSize = 'cover';
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}

// get name
function getName() {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

//set Name
function setName(e) {
	if (e.type === 'keypress') {
		// make sure enter is pressed
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}

// get focus
function getFocus() {
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}
// set focus
function setFocus(e) {
	if (e.type === 'keypress') {
		// make sure enter is pressed
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// call function
showTime();
setBgGreet();
getName();
getFocus();
