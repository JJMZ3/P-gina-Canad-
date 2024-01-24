const info = document.querySelector(".alert-info");

function process(event) {
 event.preventDefault();

 const phoneNumber = phoneInput.getNumber();

 info.style.display = "";
 info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function guardar(){
    const doc=document;
    const Nombre_completo=doc.getElementById("Nombre_completo").value.trim();
    const Correo_electronico=doc.getElementById("Correo_electronico").value.trim();
    const Año_de_nacimiento=doc.getElementById("Año_de_nacimiento").value.trim();
    const Nivel_de_ingles=doc.getElementById("Nivel_de_ingles").value.trim();
    const Pais_de_nacimiento=doc.getElementById("Pais_de_nacimiento").value.trim();
    const phone=doc.getElementById("phone").value.trim();
    const vacios =[phone,Nombre_completo,Correo_electronico,Año_de_nacimiento,Nivel_de_ingles,Pais_de_nacimiento].includes("");

    if(!vacios){
        localStorage.setItem("Nombre_completo" , Nombre_completo);
        localStorage.setItem("Correo_electronico" , Correo_electronico);
        localStorage.setItem("Año_de_nacimiento" , Año_de_nacimiento);
        localStorage.setItem("Nivel_de_ingles" ,Nivel_de_ingles);
        localStorage.setItem("Pais_de_nacimiento" , Pais_de_nacimiento);
        localStorage.setItem("phone" , phone);
        mensaje.innerHTML="Registrado con exito";
        mensaje.style.color="green";
} else{
  mensaje.innerHTML="";
}

}
function almacenar(){
  const doc=document;
  const genero=doc.getElementById("genero").value.trim();
  const tipo_aplicación=doc.getElementById("tipo_aplicación").value.trim();
  const nacionalidad=doc.getElementById("nacionalidad").value.trim();
  const dia_nacimeinto=doc.getElementById("dia_nacimeinto").value.trim();
  const mes_de_nacimiento=doc.getElementById("mes_de_nacimiento").value.trim();
  const año_nacimiento =doc.getElementById("año_nacimiento" ).value.trim();
  const compromiso=doc.getElementById("compromiso" ).value.trim();
  const vacios =[genero,tipo_aplicación, nacionalidad,dia_nacimeinto,mes_de_nacimiento, año_nacimiento,compromiso ].includes("");

  if(!vacios){
      localStorage.setItem("genero" , genero);
      localStorage.setItem("tipo_aplicación" , tipo_aplicación);
      localStorage.setItem("nacionalidad" ,nacionalidad);
      localStorage.setItem("dia_nacimeinto" ,dia_nacimeinto);
      localStorage.setItem("mes_de_nacimiento" , mes_de_nacimiento);
      localStorage.setItem("año_nacimiento" ,año_nacimiento);
      localStorage.setItem("compromiso" ,compromiso );
      mensaje.innerHTML="Registrado con exito";
      mensaje.style.color="green";
} else{
mensaje.innerHTML="Debe rellenar todos los campos";
}

}