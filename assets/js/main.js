

var nuevoInp = function() {
	var inp = document.createElement("input");
	var contenidoinput = document.createTextNode(" ");
	inp.setAttribute('type', 'texto');
	inp.setAttribute("id", "inpCr");
	inp.setAttribute("placeholder", "Añadir una lista...");
	inp.appendChild(contenidoinput);
	document.getElementById("div").appendChild(inp);

}

var nuevoBtn = function() {
	var btn = document.createElement("button");
	btn.innerHTML  += "Guardar" ;

	btn.setAttribute("onclick", "listaBoton()")
	document.getElementById("div").appendChild(btn);

} 

var botonLi = document.getElementById('botonLi');
botonLi.onclick = function() {
	nuevoInp();
	nuevoBtn();
}

//FUNCIONES
function myFunction() {
	nuevoInp();
	nuevoBtn();
}

function listaBoton() {
	inpV = document.getElementById('inpCr').value;
	array = [];
	array.push(inpV);
	sale();
	botones()
}


function sale() {
	for(var i =0; i <array.length; i++) {
		var p = document.getElementById("sera");
		p.style.fontWeight= "bold";
		p.style.height = '130px';
		p.innerHTML +=  array[i] +"<br>";
	}
}

function botones() { 
	var p = document.getElementById("sera");
	var divi = document.createElement("div");
	divi.setAttribute("id", "divi");
	var botones = document.getElementById("botones");
	var contbtn1 = document.createTextNode("Agregar nueva tarjeta");	
	var contbtn2 = document.createTextNode("Guardar");		
	var bt1 = document.createElement("button");
	bt1.appendChild(contbtn1);
	bt1.setAttribute("onclick", "presionBoton1()")
	var bt2 = document.createElement("button");
	bt2.appendChild(contbtn2);
	bt2.setAttribute("onclick", "presionBoton2()")
	divi.appendChild(bt1);
	divi.appendChild(bt2);
	p.appendChild(divi);
}

function presionBoton1() {
	var p = document.getElementById("sera");	
	var textT = document.createElement("textarea");
	textT.setAttribute("id", "texti");
	p.appendChild(textT);

}
function presionBoton2() {
	var texti  = document.getElementById("texti").value;
	var p = document.getElementById("sera");
	p.innerHTML += "<i>" + texti +"</i>" + "<br>" ;
	console.log(texti); 
}
