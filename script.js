
const menuItems = document.querySelectorAll('.menu-3 li');


menuItems.forEach((item)=>{
	item.addEventListener('click',(e)=>{
		const fixedNav = document.querySelector('.headerWrapper');
		console.log(getComputedStyle(fixedNav, null).position);
		const scrollItem = document.querySelector(`#${e.target.dataset.name}`)
		window.scroll({
			top:`${scrollItem.getBoundingClientRect().top + window.pageYOffset - (getComputedStyle(fixedNav, null).position == "fixed" ? fixedNav.offsetHeight : 0 )}`,
			left:0,
			behavior:'smooth'})
		
		console.log(scrollItem.offsetTop + window.pageYOffset);
	})
})


