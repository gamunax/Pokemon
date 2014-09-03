function Pokemon(nombre, vida, ataque, grito, imagen){
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;
	this.grito = grito ;
	this.imagen = imagen;
	this.gritar = function(){
		alert(this.grito);
	}
}

function grito(pokemon){
	if(pokemon == "Pikachu"){
		var poke = new Pokemon("Pikachu", 100, 55,"Pika!!!", "pikachu.jpg");
		poke.gritar();		
		nombrePokemon.textContent = "Pokemón: "+poke.nombre;
		imagen.src = "image/"+poke.imagen;
		var datos;
		datos = "Vida: " + poke.vida + " Ataque: "+poke.ataque;
		datosPokemon.textContent = datos;
	}else if(pokemon == "jigglypuff"){
		var poke = new Pokemon("jigglypuff", 60, 20,"Jigglypuff!!!!!!!", "jigglypuff.jpg");
		poke.gritar();		
		nombrePokemon.textContent = "Pokemón: "+poke.nombre;
		imagen.src = "image/"+poke.imagen;
		var datos;
		datos = "Vida: " + poke.vida + " Ataque: "+poke.ataque;
		datosPokemon.textContent = datos;
	}else if(pokemon == "April"){
		var poke = new Pokemon("April", 40, 10,"April!!!!!!!", "April.jpg");
		poke.gritar();		
		nombrePokemon.textContent = "Pokemón: "+poke.nombre;
		imagen.src = "image/"+poke.imagen;
		var datos;
		datos = "Vida: " + poke.vida + " Ataque: "+poke.ataque;
		datosPokemon.textContent = datos;	
	}else if(pokemon == "Pokmon"){
		var poke = new Pokemon("Pokmon", 100, 80,"Pokmon!!!!!!!", "Pokmon.jpg");
		poke.gritar();		
		nombrePokemon.textContent = "Pokemón: "+poke.nombre;
		imagen.src = "image/"+poke.imagen;
		var datos;
		datos = "Vida: " + poke.vida + " Ataque: "+poke.ataque;
		datosPokemon.textContent = datos;	
	}
}
/*function inicio(){
	var pikachu = new Pokemon("Pikachu", 100, 55,"Pika!!!", "pikachu.jpg");
	//rattata.vida = rattata.vida - 13;

	nombrePokemon.textContent = pikachu.nombre;
	imagen.src=pikachu.imagen;
	var datos;
	datos = "Vida: " + pikachu.vida + " Ataque: "+pikachu.ataque;
	datosPokemon.textContent = datos;
}
*/



//rattata.grito = "raaaaa";
//rattata.gritar();
/*
function Pokemon(nombrePokemon, vidaPoke, ataPoke){
	var estructuraPokemon = 
	{
		nombre: nombrePokemon,
		vida: vidaPoke,
		ataque: ataPoke,
		datos: {tipo: "Tierra", debilidad: "Fuego"}
	};
		return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu",100,55);
var bulbasaur = Pokemon("Bulasaur",90,50);
*/

//DOCUMENT OBJECT MODEL

// navigator, window, document

//Objeto
//Variables
//Funciones
//document.write("Hola!");
//var pi = 3.141592654;
//pi = Math.floor(pi);
//document.write(pi);
/*
var maxima;
maxima = Math.max(6,5,4,10,12,25,27,28);
document.write(maxima);


function mostrar(pos){
	document.write(pos.coords.latitude + "," + pos.coords.longitude);	
}
navigator.geolocation.getCurrentPosition(mostrar);
*/