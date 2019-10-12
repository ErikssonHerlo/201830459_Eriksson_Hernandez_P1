
var input = myForm.myInput;
var reader = new FileReader;
var palabrasReservadas = RegExp("(entero|decimal|booleano|cadena|si|sino|mientras|hacer|VERDADERO|FALSO|para|for|while|int|char|String)");
var espacio=' ';
var automata = new Array(9);
var er1 = /[a-z]|[A-Z]/;
var er2 = /[0-9]/;
var vacio = RegExp(' ');
var operador =  /[+|-|=]/;
var agrupacion = /(|)|{|}/;
var signo = /"|;/;
var token = new Array();
var tokens;
var lineas;
var palabras=0;
input.addEventListener('change', onChange);


function onChange(event) {
  var file = event.target.files[0];
  reader.readAsText(file);
  reader.onload = onLoad;
}


function onLoad() {
  var result = reader.result; // Obtienes el texto
  
  for(var i=0;i<result.length;i++){
    token[i] = result.split(' ')[i];
    if(token[i]!=undefined){
    console.log(palabras+".TOKEN: "+token[i]);
    palabras++;
    }else{break;}
  }


  for(var o=0;o<palabras;o++)
  {
    for(var i=0;i<token[o].length;i++)
    {
     
      if(er1.test(token[o].charAt(i))){
        console.log(token[o].charAt(i));
      }else if((operador.test(token[o].charAt(i)))||(signo.test(token[o].charAt(i)))){
        console.log(token[o].charAt());
      }
      if((i+1)==token[o].length){
        console.log(token[o]);
      }
      for(var o=0;o<palabras;o++){
    if(palabrasReservadas.test(token[o])){
      historial.innerHTML = historial.innerHTML + "<li class=\"list-group-item\">"+token[o].split(" ")+" - "+"Palabra Reservada"+"</li>";
    }
    if(operador.test(token[o])){
      historial.innerHTML = historial.innerHTML + "<li class=\"list-group-item\">"+token[o]+" - "+"Operador"+"</li>";

    }
  }
  
}
  }

  
  function palabrasR(){
  
}

  }