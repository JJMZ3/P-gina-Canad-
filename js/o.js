function guardar(){
    const doc=document;
    const correo=doc.getElementById("correo").value.trim();
    const clave=doc.getElementById("clave").value.trim();
    const recordar=doc.getElementById("recordar");
    const mensaje=doc.getElementById("mensaje");
    const vacios=[correo,clave].includes("");
    if(!vacios){
        localStorage.setItem("correo" , correo);
        localStorage.setItem("clave" , clave);
        mensaje.innerHTML="Registrado con exito";
        mensaje.style.color="green";
        doc.getElementById("correo").value="";
        doc.getElementById("clave").value="";
        doc.getElementById("correo").focus();
    }
    else if(correo==""&& clave!=""){
        mensaje.innerHTML="Debe ingresar correo";
        doc.getElementById("correo").focus();
    }
    else if(clave==""&& correo!=""){
        mensaje.innerHTML="Debe ingresar contraseña";
        doc.getElementById("clave").focus();
    }
    else if(vacios){
        mensaje.innerHTML="Debe ingresar correo y contraseña";
        doc.getElementById("correo").focus();
    }
    console.log(vacios);
}
