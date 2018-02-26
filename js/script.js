var portfolio = document.querySelector('.ptfolio_item');

portfolio.onmousedown = function() {mouseDown()}

function mouseDown () {
	document.getElementByClassName('.ptfolio_item').style.border = "2px solid blue";
}
