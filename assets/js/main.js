var span = document.getElementById("span");
span.onclick =function(e) {
	span.setAttribute("class", "span");
}
var value;
span.onclick = function() {
	var trello = document.getElementById("trello");
	var span = document.getElementById("span");
	var nuevosI = document.createElement("input");
	nuevosI.setAttribute("id","inpt");
	var botonAgregar = document.createElement("button");

 	botonAgregar.setAttribute("onclick", "botonAgregar()");
	var cont = document.createTextNode("Agregar");
	botonAgregar.appendChild(cont);
	botonAgregar.setAttribute("class","nuevoB");
	var botonX = document.createElement("button");

	botonX.setAttribute("class", "nuevoB");
	var contenedor = document.getElementById("contenedor");
	var peDiv = document.createElement("div");
	contenedor.setAttribute("class", "contenedor");
	span.setAttribute("class","oculto"); //no touch
	peDiv.setAttribute("class", "peDiv");
	contenedor.appendChild(nuevosI);
	contenedor.appendChild(botonAgregar);
	contenedor.appendChild(botonX);
	nuevosI.setAttribute("placeholder", "Añadir una lista...")
	contenedor.appendChild(peDiv);
}

function botonAgregar() {
		var value = document.getElementById("inpt").value;

	var contenedor = document.getElementById("contenedor");
	var crear = document.createElement("div");
	crear.appendChild(value)
	contenedor.appendChild(crear);

}

// var nuevoInp = function() {
// 	var inp = document.createElement("input");
// 	var contenidoinput = document.createTextNode(" ");
// 	inp.setAttribute('type', 'texto');
// 	inp.setAttribute("id", "inpCr");
// 	inp.setAttribute("placeholder", "Añadir una lista...");
// 	inp.appendChild(contenidoinput);
// 	document.getElementById("div").appendChild(inp);

// }

// var guardar = function() {
// 	var btn = document.createElement("button");
// 	btn.innerHTML  += "Guardar" ;
// 	btn.setAttribute("id", "btn");
// 	btn.setAttribute("onclick", "listaBoton()");
// 	var nuevaX = document.createElement("button");
// 	nuevaX.innerHTML += "X";
// 	nuevaX.setAttribute("id", "X")
// 	document.getElementById("div").appendChild(btn);
// 	document.getElementById("div").appendChild(nuevaX);


// } 

// var botonLi = document.getElementById('botonLi');
// botonLi.onclick = function() {
// 	var botonLi = document.getElementById('botonLi');
// 	botonLi.style.display = "none";
// 	var sipi = document.getElementById("sipi");
// 	sipi.setAttribute("class", "sipi")
// 	var botonLi = document.getElementById('botonLi');
// 	var div = document.getElementById("div");
// 	div.setAttribute("class", "div")
// 	nuevoInp();
// 	guardar();
// 	var btn = document.getElementById("btn");

// 	document.getElementById("div").appendChild(btn);

// }

// //FUNCIONES
// function myFunction() {
// 	nuevoInp();
// 	guardar();
// }

// function listaBoton() {
// 	var cont = document.getElementById('cont').value;
// 	array = [];
// 	array.push(cont);
// 	sale();
// 	// botones();
// }


// function sale() {
// 	// var sipi = document.getElementById('inpCr').value;
// 	for(var i =0; i <array.length; i++) {
// 		var crear = document.createElement("input");
// 		var añadirT = document.createElement("button");
// 		añadirT.innerHTML += "Añadir nueva tarjeta";
// 		añadirT.setAttribute("class", "inP");
// 		cont.appendChild(añadirT);
// 		cont.appendChild(crear);
// 		document.getElementById('inpCr').value.style.fontWeight= "bold";
// 		sipi.style.height = 'auto';
// 		sipi.innerHTML +=  array[i] +"<br>";
// 		cont.appendChild(sipi);
// 	}
// }

// function botones() { 
// 	var sera = document.getElementById("todo");
// 	var botones = document.getElementById("botones");
// 	botones.setAttribute("id", "botones");
// 	var botones = document.getElementById("botones");
// 	var contbtn1 = document.createTextNode("Agregar nueva tarjeta");	
// 	var bt1 = document.createElement("button");
// 	bt1.appendChild(contbtn1);
// 	bt1.setAttribute("onclick", "presionBoton1()")
// 	var bt2 = document.createElement("button");
// 	var contbtn2 = document.createTextNode("Añadir");		
// 	bt2.setAttribute("onclick", "presionBoton2()")
// 	bt2.appendChild(contbtn2);
// 	botones.appendChild(bt1);
// 	botones.appendChild(bt2);
// 	sera.appendChild(botones);
// }

// function presionBoton1() {
// 	var sera = document.getElementById("sera");	
// 	var textT = document.createElement("textarea");
// 	textT.setAttribute("id", "texti");
// 	sera.appendChild(textT);

// }
// function presionBoton2() {
// 	var texti  = document.getElementById("texti").value;
// 	var sera = document.getElementById("sera");
// 	sera.innerHTML += "<i>" + texti +"</i>" + "<br>" ;
// 	console.log(texti); 
// }
