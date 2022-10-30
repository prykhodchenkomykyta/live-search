document.querySelector("#elastic").oninput = function() {
		let val = this.value.trim();
		let elasticItems = document.querySelectorAll('.elastic li');
		if (val != '') {
			elasticItems.forEach(function (elem) {
				if (elem.innerText.search(val) == -1) {
					elem.classList.add('hide');
					elem.innerHTML = elem.innerText;
				} else {
					elem.classList.remove('hide');
					let str = elem.innerText;
					let position = elem.innerText.search(val);
					elem.innerHTML = insertText(str, position, val.length);
				}
			});
		} else {
			elasticItems.forEach(function (elem) {
				elem.classList.remove('hide');
				elem.innerHTML = elem.innerText;
			});
	}
}

function insertText (string, pos, len) {
	return string.slice(0, pos)+"<mark>"+string.slice(pos, pos+len)+"</mark>"+string.slice(pos+len);
}
