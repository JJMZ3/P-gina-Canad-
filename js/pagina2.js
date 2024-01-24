
function almacenar() {
    const genero = document.getElementById("genero").value.trim();
    const tipo_aplicación = document.getElementById("tipo_aplicación").value.trim();
    const nacionalidad = document.getElementById("nacionalidad").value.trim();
    const dia_nacimiento = document.getElementById("dia_nacimiento").value.trim();
    const mes_de_nacimiento = document.getElementById("mes_de_nacimiento").value.trim();
    const año_nacimiento = document.getElementById("año_nacimiento").value.trim();
    const casado = document.querySelector('input[name="casado"]:checked').value;

    if (genero && tipo_aplicación && nacionalidad && dia_nacimiento && mes_de_nacimiento && año_nacimiento && casado) {
      localStorage.setItem("genero", genero);
      localStorage.setItem("tipo_aplicación", tipo_aplicación);
      localStorage.setItem("nacionalidad", nacionalidad);
      localStorage.setItem("dia_nacimiento", dia_nacimiento);
      localStorage.setItem("mes_de_nacimiento", mes_de_nacimiento);
      localStorage.setItem("año_nacimiento", año_nacimiento);
      localStorage.setItem("casado", casado);
    }
   else{
    
   }
  }