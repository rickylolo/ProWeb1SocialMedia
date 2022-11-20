$(document).ready(function () {
    datosUser();
    getDatosUsers();
  $("#miEditPerfil").hide();
 $("#miFotoCargada").hide();
 $("#miFotoCargada-Edit").hide();
  $("#pfp-abrir").click(funcMostrarEditPerfil);
  function funcMostrarEditPerfil() {
    $("#miEditPerfil").toggle();
  }

function getDatosUsers(){
  $.ajax(
    //GET DATOS USUARIOS 
    {
      url: "http://localhost:8080/Users"
    }
  )
    .done(function (data) {
            for (let i = 0; i < data.length; i++) {
     $("#misUsuarios").append( `
                                  <div class="message">
                                    <div class="profile-photo">
                                        <img src="/ShowImageUser?id=${data[i].id}">
                                    </div>
                                    <div class="message-body">
                                        <h5>@${data[i].username}</h5>
                                        <p class="text-muted">${data[i].name}</p>
                                    </div>
                                </div>
                ` );
        }
    })
    .fail(function (data) {
      console.error(data);
    });
    
}
function datosUser(){
     $.ajax(
    //GET DATOS USUARIO
    {
      url: "http://localhost:8080/Register"
    }
  )
    .done(function (data) {
      $("#miNombreLoged").text(data[0].name);
      $("#miUsuarioLoged").text("@" + data[0].username);
      $("#name").val(data[0].name);
      $("#apellido").val(data[0].lastName);
      $("#fecha").val(data[0].fecha);
      $("#E_miUsuario").text("@" + data[0].username);

      let miPlaceholder = "¿Que tienes en mente," + data[0].username + "?";
      $("#create-post").attr(
        "placeholder",
        miPlaceholder.substr(1, miPlaceholder.length)
      );
    })
    .fail(function (data) {
      console.error(data);
    });
    }
});

let vista_preliminar = (event)=>{
    $("#miFotoCargada").show();
  let leer_img = new FileReader();
  let id_img = document.getElementById('img-foto');

  leer_img.onload =() =>{
    if(leer_img.readyState==2){
      id_img.src = leer_img.result
    }
  }

  leer_img.readAsDataURL(event.target.files[0])
}

let vista_preliminar2 = (event)=>{
    $("#miFotoCargada-Edit").show();
  let leer_img = new FileReader();
  let id_img = document.getElementById('img-foto-edit');

  leer_img.onload =() =>{
    if(leer_img.readyState==2){
      id_img.src = leer_img.result
    }
  }

  leer_img.readAsDataURL(event.target.files[0])
}
