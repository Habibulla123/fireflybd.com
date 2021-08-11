// back top btn active class add
const toTop = document.querySelector(".top-btn");
window.addEventListener("scroll",() =>{
	if (window.pageYOffset > 200){
		toTop.classList.add('active');
	}else{
		toTop.classList.remove('active');
	}
})

// contact button active class add
const contactBtn = document.querySelector(".contact-btn");
window.addEventListener("scroll",() =>{
	if (window.pageYOffset > 200){
		contactBtn.classList.add('activeTwo');
	}else{
		contactBtn.classList.remove('activeTwo');
	}
})
