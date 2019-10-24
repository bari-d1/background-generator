
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const  body = document.getElementById("gradient");
const deg30 = document.querySelector(".deg30");
const deg45 = document.querySelector(".deg45");
const deg60 = document.querySelector(".deg60");
const deg75 = document.querySelector(".deg75");
const deg90 = document.querySelector(".deg90");
const deg180 = document.querySelector(".deg180");

 setGradient = () => {
	body.style.background = 
	`linear-gradient(to right,
	${color1.value },
	${color2.value });`
	css.textContent = body.style.background + ";"
}
console.log(body.style.background)
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
deg30.addEventListener('click', degree(30));
deg45.addEventListener('click', degree(45));
deg60.addEventListener('click', degree(60));
deg75.addEventListener('click', degree(75));
deg90.addEventListener('click', degree(90));
deg180.addEventListener('click', degree(180));
	

degree = (deg) => {
body.style.background = 
	`linear-gradient(${deg}),
	${color1.value },
	${color2.value });`
	css.textContent = body.style.background + ";"
}

