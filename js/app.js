//Control de menu

let desplegado = null;
let barra = document.getElementById('icono-menu');
let opcion = document.getElementsByClassName('op');
let sele = document.getElementById('selected');
let nav = document.getElementById('menuOp');
let social = document.getElementById('social-bar') 

//Carrusel de JS
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
});



//Despliegue del menu

document.addEventListener('DOMContentLoaded', function(){

	console.log('cargado');
})

function desplegarMenu(){
	console.log("Se toco la barra");
	estilo = sele.style.display
	console.log(estilo)
	
	//
	if(estilo == 'none'){
		for(i = 0; i < 5; i++){
		opcion[i].style.display = 'block';
		opcion[i].classList.add('animate__animated');
		opcion[i].classList.add('animate__slideInRight');
		sele.style.display = 'block';
		sele.classList.add('animate__animated');
		sele.classList.add('animate__slideInRight');
		}
	}else{
		for(i = 0; i < 5; i++){
		opcion[i].style.display = 'none';
		opcion[i].classList.remove('animate__animated');
		opcion[i].classList.remove('animate__slideInRight');
		sele.style.display = 'none';
		sele.classList.remove('animate__animated');
		sele.classList.remove('animate__slideInRight');
		}	 	 
	}
}

function desplegarMenu2(){
	console.log("Se redimensiono");
	tam = screen.width
	console.log(tam)
	
	if(tam >= 900){
		for(i = 0; i < 5; i++){
		opcion[i].style.display = 'block';
		sele.style.display = 'block';
		barra.disabled = false;
		}
	}else{
		for(i = 0; i < 5; i++){
		opcion[i].style.display = 'none';
		sele.style.display = 'none';
		}	 	
		barra.disabled = true;
	}
	
}

barra.addEventListener('click', desplegarMenu)
window.addEventListener('resize', desplegarMenu2)

/*Esconder y mostrar menu*/

function ponerLinea(){
	
	console.log(scrollY)
	
	if(scrollY > 560){
		nav.style.borderBottom = 'var(--blue) 4px solid';
	}else{
		nav.style.borderBottom = 'none';
	}
	
	if(scrollY > 7000 || scrollY < 200){
		social.style.marginLeft = '-100%';
	}else{
		social.style.marginLeft = '0%';
	}
	
}

document.addEventListener('scroll', ponerLinea)
 