var opens = document.getElementById('open');
var closes = document.getElementById('close');
var sidebar = document.getElementById('sidebar');
var main = document.getElementById('content');

var textArray = sidebar.getElementsByClassName('text');
var dropdowns = sidebar.getElementsByClassName('dropdown');
var dropdownElements = sidebar.getElementsByClassName('dropdown_content');

var dropdownEnabled = false;

closes.addEventListener('click', closeNav);
opens.addEventListener('click', openNav);

function openNav() {
	sidebar.style.width = '250px';
	sidebar.style.fontSize = '25px';
	main.style.marginLeft = '270px';
	opens.classList.add('hide');
	closes.classList.remove('hide');

	for (i = 0; i < textArray.length; i++) {
		textArray[i].classList.remove('hide');
	}
	dropdownEnabled = true;
}

function closeNav() {
	sidebar.style.width = '50px';
	sidebar.style.fontSize = '40px';
	main.style.marginLeft= '70px';
	opens.classList.remove('hide');
	closes.classList.add('hide');

	for (i = 0; i < textArray.length; i++) {
		textArray[i].classList.add('hide');
	}
	for (i = 0; i < dropdownElements.length; i++) {
		dropdownElements[i].style.display = 'none';
		dropdownElements[i].parentElement.getElementsByTagName('i')[0].classList.remove('fa-chevron-down');
	}
	dropdownEnabled = false;
}

for (i = 0; i < dropdowns.length; i++) {
	dropdowns[i].addEventListener('click', function() {
		if (!dropdownEnabled){
			return;
		}

		var dropdownContent = this.getElementsByClassName('dropdown_content')[0];
		if (dropdownContent.style.display === 'block') {
			dropdownContent.style.display = 'none';
			this.getElementsByTagName('i')[0].classList.remove('fa-chevron-down');
		} else {
			dropdownContent.style.display = 'block';
			this.getElementsByTagName('i')[0].classList.add('fa-chevron-down');
		}
	});
}