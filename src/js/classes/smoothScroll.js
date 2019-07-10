class SmoothScroll {
	constructor(item){
		this.item = item;
		this.bindClick();
	}

	bindClick(){
		let scrollTo = this.item.getAttribute("href");

		this.item.addEventListener('click', (event) => {
			event.preventDefault();
			let element = document.getElementById(scrollTo.substring(1));

			window.scrollBy({
				top:  element.getBoundingClientRect().top - 10,
				behavior: 'smooth'
			})
		})
	}
}

document.addEventListener("DOMContentLoaded", () => {
	let linkItems = document.querySelectorAll('.js-goTo');
	if (linkItems) [...linkItems].forEach(item => new SmoothScroll(item))
});
