/*Anima una barra */
function animarBarra(id, incremento, intervalo){
	e = document.getElementById(id);
	var val = parseInt(e.innerHTML) + parseInt(incremento);
	if(val>100){
		val=(incremento>0)? 0 : 100;
	}else{
		if(val<0){
			val=(incremento<0)? 100 : 0;
	}}
	e.innerHTML = val+'%';
	e.style.width = val+'%';
	setTimeout("animarBarra('"+id+"', "+incremento+", "+intervalo+")", intervalo);
}
