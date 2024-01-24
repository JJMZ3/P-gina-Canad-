function almacenar(){
const doc=document;
const GRADUADO = document.querySelector('input[name="GRADUADO"]:checked').value;
const OTRA_EDUCACION = document.querySelector('input[name="OTRA_EDUCACION"]:checked').value;
const vacios =[GRADUADO, OTRA_EDUCACION ].includes("");

if(GRADUADO&&OTRA_EDUCACION){
localStorage.setItem("GRADUADO" , GRADUADO);
localStorage.setItem("OTRA_EDUCACION" ,OTRA_EDUCACION);

} else{
mensaje.innerHTML="Debe rellenar todos los campos";
}
}

const Nivel_de_ingles=document.getElementById("Nivel_de_ingles")
const Nivel_de_francés=document.getElementById("Nivel_de_francés")

// Nivel_de_ingles.addEventListener("mousemove",function(){


// })

// Nivel_de_francés.addEventListener("mousemove",function(){
//   var x=Nivel_de_francés.value;
// })

Nivel_de_ingles.addEventListener("mousemove", function(){
  var x=Nivel_de_ingles.value
  var color = 'linear-gradient( 90deg, rgb(9, 40, 124)' +x+'%, rgb(80, 80, 82)'+x+'%)'
  Nivel_de_ingles.style.background=color
})

Nivel_de_francés.addEventListener("mousemove", function(){
  var x=Nivel_de_francés.value
  var color = 'linear-gradient( 90deg, rgb(9, 40, 124)' +x+'%, rgb(80, 80, 82)'+x+'%)'
  Nivel_de_francés.style.background=color
})

  




