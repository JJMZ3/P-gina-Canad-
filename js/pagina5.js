function guardar(){
    const doc=document;
    const Username=doc.getElementById("Username").value.trim();
    const Password=doc.getElementById("Password").value.trim();
    const vacios =[Username,Password ].includes("");

    if(!vacios){
        localStorage.setItem("Username" , Username);
        localStorage.setItem("Password" , Password);
        mensaje.innerHTML="Registrado con exito";
        mensaje.style.color="green";
} else{
  mensaje.innerHTML="Debe rellenar todos los campos";
}

}