$(document).ready(function () {
  $("#EditarPublicacion").hide();

  cargarPublicaciones();

  function cargarPublicaciones() {
    $.ajax(
      //GET DATOS PUBLICACIONES
      {
        url: "http://localhost:8080/Publicaciones",
      }
    )
      .done(function (data) {
        let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();

        let miIdUsuario = $("#miUserIdActual").val();

        $("#misPublicaciones").empty();
        for (let i = 0; i < data.length; i++) {
          if (i < totalPublicaciones) {
            let texto = data[i].texto;
            let newTexto = texto.replaceAll(
              /#([A-Za-z]+)/g,
              '#<a href="#" class="hash">$1</a>'
            );
            let miPublicacion =    `
                          <div class="feed">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h3>${data[i].NombreCompleto}</h3>
                                                <small>${data[i].Fecha}</small>
                                            </div>
                                        </div>
                  `;
             if(miIdUsuario == data[i].idUsuario){
                 miPublicacion = miPublicacion + `
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                        <a class="delete" id="${data[i].id}">
                                            <h3><i class="uil uil-trash-alt"></i></h3>
                                        </a> `;
             }
                miPublicacion = miPublicacion + `</div> `  ;
             if(data[i].spoiler == "false"){
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>Esta publicacion fue marcada como spoiler
                                    </div>`  ;
             }else{
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>${newTexto}
                                    </div>`  ;
             }
             if(data[i].isImagen == 1){
                 if(data[i].spoiler == "true"){
                         miPublicacion = miPublicacion + ` 
                    <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}">
                    </div>`;
                 }else{
                      miPublicacion = miPublicacion + ` 
                      <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}" style="display:none;">
                    </div>`;
                 }
                 
             }
                     miPublicacion = miPublicacion + `                                   
                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>                                
                                      </div>
                                        <input type="hidden" value='${newTexto}' class="miTextoPostHidden">
                                        <input type="hidden" value="/ShowImagePost?id=${data[i].id}" class="miImagenPostHidden">
                                           <div class="bookmark" id="${data[i].id}">                    
                                            <span id="${data[i].idUsuario}">
                                                <i class="spoilerPost uil-eye-slash"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>
                                     <br>
                                    <div class="comments text-muted">Ver los ${data[i].TotalComentarios} comentarios</div>

                         
                   <div class="head mostrarComentarios" id="misComentarios-${data[i].id}"  style="display:block;>
                 
                                    </div>
                        <div class="head">
                            <form class="create-post" id="${data[i].id}">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                <input type="text" class="miComentarioTexto" name="comentario" placeholder="Escribe tu comentario...">                 
                                <button type="button" class="insertarComentario btn btn-primary" >Comentar</button>
                                  
                            </form>
                        </div>
                    </div>
                 </div>`  ;
                                   

                                   
                
            $("#misPublicaciones").append(miPublicacion);
                  
       
              

            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id },
              }
            )
              .done(function (data) {
                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;

                  if (data[i].spoiler == "true") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div id="${data[i].idUsuario}" class="ingo">
                                                <h5>${data[i].username}</h5> 
                                                 <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <small class="MiTexto">${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                  }
                  if (data[i].spoiler == "false") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo" id="${data[i].idUsuario}">
                                                <h5>${data[i].username}</h5>
                                                <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <input type="hidden" class="textoOculto" value="${data[i].texto}">
                                                <small class="MiTexto">Este contenido fue marcado como spoiler</small>
                                            </div>
                                        </div>
                                       `);
                  }

                  $(miBusqueda).children(".user").hide();
                }
              })
              .fail(function (data) {
                console.error(data);
              });

            if (i % 10 == 0) {
              numberPage = i / 10 + 1;
              Math.trunc(numberPage);
            }
          }
        }
      })
      .fail(function (data) {
        console.error(data);
      });
  }
  function cargarPublicacionesLikes() {
    $.ajax(
      //GET DATOS PUBLICACIONES
      {
        url: "http://localhost:8080/PublicacionesLikes",
      }
    )
       .done(function (data) {
        let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();

        let miIdUsuario = $("#miUserIdActual").val();

        $("#misPublicaciones").empty();
        for (let i = 0; i < data.length; i++) {
          if (i < totalPublicaciones) {
            let texto = data[i].texto;
            let newTexto = texto.replaceAll(
              /#([A-Za-z]+)/g,
              '#<a href="#" class="hash">$1</a>'
            );
            let miPublicacion =    `
                          <div class="feed">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h3>${data[i].NombreCompleto}</h3>
                                                <small>${data[i].Fecha}</small>
                                            </div>
                                        </div>
                  `;
             if(miIdUsuario == data[i].idUsuario){
                 miPublicacion = miPublicacion + `
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                        <a class="delete" id="${data[i].id}">
                                            <h3><i class="uil uil-trash-alt"></i></h3>
                                        </a> `;
             }
                miPublicacion = miPublicacion + `</div> `  ;
             if(data[i].spoiler == "false"){
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>Esta publicacion fue marcada como spoiler
                                    </div>`  ;
             }else{
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>${newTexto}
                                    </div>`  ;
             }
             if(data[i].isImagen == 1){
                 if(data[i].spoiler == "true"){
                         miPublicacion = miPublicacion + ` 
                    <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}">
                    </div>`;
                 }else{
                      miPublicacion = miPublicacion + ` 
                      <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}" style="display:none;">
                    </div>`;
                 }
                 
             }
                     miPublicacion = miPublicacion + `                                   
                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>                                
                                      </div>
                                        <input type="hidden" value='${newTexto}' class="miTextoPostHidden">
                                        <input type="hidden" value="/ShowImagePost?id=${data[i].id}" class="miImagenPostHidden">
                                           <div class="bookmark" id="${data[i].id}">                    
                                            <span id="${data[i].idUsuario}">
                                                <i class="spoilerPost uil-eye-slash"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>
                                     <br>
                                    <div class="comments text-muted">Ver los ${data[i].TotalComentarios} comentarios</div>

                         
                   <div class="head mostrarComentarios" id="misComentarios-${data[i].id}"  style="display:block;>
                 
                                    </div>
                        <div class="head">
                            <form class="create-post" id="${data[i].id}">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                <input type="text" class="miComentarioTexto" name="comentario" placeholder="Escribe tu comentario...">                 
                                <button type="button" class="insertarComentario btn btn-primary" >Comentar</button>
                                  
                            </form>
                        </div>
                    </div>
                 </div>`  ;
                                   

                                   
                
            $("#misPublicaciones").append(miPublicacion);
                  
       
              

            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id },
              }
            )
              .done(function (data) {
                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;

                  if (data[i].spoiler == "true") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div id="${data[i].idUsuario}" class="ingo">
                                                <h5>${data[i].username}</h5> 
                                                 <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <small class="MiTexto">${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                  }
                  if (data[i].spoiler == "false") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo" id="${data[i].idUsuario}">
                                                <h5>${data[i].username}</h5>
                                                <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <input type="hidden" class="textoOculto" value="${data[i].texto}">
                                                <small class="MiTexto">Este contenido fue marcado como spoiler</small>
                                            </div>
                                        </div>
                                       `);
                  }

                  $(miBusqueda).children(".user").hide();
                }
              })
              .fail(function (data) {
                console.error(data);
              });

            if (i % 10 == 0) {
              numberPage = i / 10 + 1;
              Math.trunc(numberPage);
            }
          }
        }
      })
      .fail(function (data) {
        console.error(data);
      });
  }
  function cargarPublicacionesComentarios() {
    $.ajax(
      //GET DATOS PUBLICACIONES
      {
        url: "http://localhost:8080/PublicacionesComentarios",
      }
    )
      .done(function (data) {
        let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();

        let miIdUsuario = $("#miUserIdActual").val();

        $("#misPublicaciones").empty();
        for (let i = 0; i < data.length; i++) {
          if (i < totalPublicaciones) {
            let texto = data[i].texto;
            let newTexto = texto.replaceAll(
              /#([A-Za-z]+)/g,
              '#<a href="#" class="hash">$1</a>'
            );
            let miPublicacion =    `
                          <div class="feed">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h3>${data[i].NombreCompleto}</h3>
                                                <small>${data[i].Fecha}</small>
                                            </div>
                                        </div>
                  `;
             if(miIdUsuario == data[i].idUsuario){
                 miPublicacion = miPublicacion + `
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                        <a class="delete" id="${data[i].id}">
                                            <h3><i class="uil uil-trash-alt"></i></h3>
                                        </a> `;
             }
                miPublicacion = miPublicacion + `</div> `  ;
             if(data[i].spoiler == "false"){
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>Esta publicacion fue marcada como spoiler
                                    </div>`  ;
             }else{
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>${newTexto}
                                    </div>`  ;
             }
             if(data[i].isImagen == 1){
                 if(data[i].spoiler == "true"){
                         miPublicacion = miPublicacion + ` 
                    <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}">
                    </div>`;
                 }else{
                      miPublicacion = miPublicacion + ` 
                      <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}" style="display:none;">
                    </div>`;
                 }
                 
             }
                     miPublicacion = miPublicacion + `                                   
                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>                                
                                      </div>
                                        <input type="hidden" value='${newTexto}' class="miTextoPostHidden">
                                        <input type="hidden" value="/ShowImagePost?id=${data[i].id}" class="miImagenPostHidden">
                                           <div class="bookmark" id="${data[i].id}">                    
                                            <span id="${data[i].idUsuario}">
                                                <i class="spoilerPost uil-eye-slash"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>
                                     <br>
                                    <div class="comments text-muted">Ver los ${data[i].TotalComentarios} comentarios</div>

                         
                   <div class="head mostrarComentarios" id="misComentarios-${data[i].id}"  style="display:block;>
                 
                                    </div>
                        <div class="head">
                            <form class="create-post" id="${data[i].id}">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                <input type="text" class="miComentarioTexto" name="comentario" placeholder="Escribe tu comentario...">                 
                                <button type="button" class="insertarComentario btn btn-primary" >Comentar</button>
                                  
                            </form>
                        </div>
                    </div>
                 </div>`  ;
                                   

                                   
                
            $("#misPublicaciones").append(miPublicacion);
                  
       
              

            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id },
              }
            )
              .done(function (data) {
                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;

                  if (data[i].spoiler == "true") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div id="${data[i].idUsuario}" class="ingo">
                                                <h5>${data[i].username}</h5> 
                                                 <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <small class="MiTexto">${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                  }
                  if (data[i].spoiler == "false") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo" id="${data[i].idUsuario}">
                                                <h5>${data[i].username}</h5>
                                                <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <input type="hidden" class="textoOculto" value="${data[i].texto}">
                                                <small class="MiTexto">Este contenido fue marcado como spoiler</small>
                                            </div>
                                        </div>
                                       `);
                  }

                  $(miBusqueda).children(".user").hide();
                }
              })
              .fail(function (data) {
                console.error(data);
              });

            if (i % 10 == 0) {
              numberPage = i / 10 + 1;
              Math.trunc(numberPage);
            }
          }
        }
      })
      .fail(function (data) {
        console.error(data);
      });
  }
  //  DAR LIKE
  $("#misPublicaciones").on("click", ".Usuariolike", funcDarLike);
  function funcDarLike() {
    let miIdPublicacion = $(this).parent().parent().attr("id");
    $.ajax({
      url: "http://localhost:8080/Like",
      type: "POST",
      data: { idPublicacion: miIdPublicacion },
    })
      .done(function (data) {
        cargarPublicaciones();
      })
      .fail(function (data) {
        console.error(data);
      });
  }

  //  OCULTAR-MOSTRAR COMENTARIOS
  $("#misPublicaciones").on("click", ".comments", funcOcultarComentarios);
  function funcOcultarComentarios() {
    $(this).parent().children(".mostrarComentarios").children(".user").toggle();
  }
  //  COMENTAR
  $("#misPublicaciones").on("click",".insertarComentario",funcInsertComentario);
  function funcInsertComentario() {
    let miIdPublicacion = $(this).parent().attr("id");
    let miComentarioPublicacion = $(this)
      .parent()
      .children(".miComentarioTexto")
      .val();
    if (miComentarioPublicacion !== "") {
      $.ajax(
        //Insertar Comentario
        {
          url: "http://localhost:8080/Comentario",
          type: "POST",
          data: {
            idPublicacion: miIdPublicacion,
            miComentario: miComentarioPublicacion,
          },
        }
      )
        .done(function (data) {
          cargarPublicaciones();
        })
        .fail(function (data) {
          console.error(data);
        });
    } else {
      alert("El comentario no puede estar vacío");
    }
  }


// CARGAR MAS
  $("#CargarMas").click(function () {
    let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();
    let consultaCasos = $("#miConsultaActual").val();
    totalPublicaciones = totalPublicaciones + 5;
    $("#miTotalDePublicacionesCargadas").val(totalPublicaciones);
    switch (consultaCasos) {
      case "Recientes":
        cargarPublicaciones();
        break;
      case "Likes":
        cargarPublicacionesLikes();
        break;
      case "Comentarios":
        cargarPublicacionesComentarios();
        break;
    }
  });

  //  EDITAR PUBLICACION
  $("#misPublicaciones").on("click", ".edit", funcEditarPublicaciones);
  function funcEditarPublicaciones() {
    $("#miFotoCargada").hide();
    let idPublicacion = $(this)
      .parent()
      .parent()
      .children(".action-buttons")
      .attr("id");
    $("#idPublicacionEdit").val(idPublicacion);
    $.ajax({
      url: "http://localhost:8080/PublicacionId",
      data: { id: idPublicacion },
    })
      .done(function (data) {
        $("#miTextoEditar").val(data[0].texto);
        $("#miFotoCargada-Edit").show();
        $("#img-foto-edit").attr("src", "/ShowImagePost?id=" + data[0].id);
        $("#InsertarPublicacion").hide();
        $("#EditarPublicacion").show();
      })
      .fail(function (data) {
        console.error(data);
      });
  }

  //  ELIMINAR PUBLICACION
  $("#misPublicaciones").on("click", ".delete", funcEliminarPublicacion);
  function funcEliminarPublicacion() {
    let id = $(this).attr("id");
    if (confirm("¿Estas seguro de eliminar esta publicacion?")) {
      $(this).parent().parent().remove();
      $.ajax({
        url: "http://localhost:8080/DeletePost",
        type: "POST",
        data: { idPublicacion: id },
      })
        .done(function (data) {})
        .fail(function (data) {
          console.error(data);
        });
    }
  }

  //Mas Recientes
  $("#MasRecientes").click(function () {
    $("#miConsultaActual").val("Recientes");
    $("#miTotalDePublicacionesCargadas").val("5");
    cargarPublicaciones();
  });

  //Mas Likes
  $("#MasLikes").click(function () {
    $("#miConsultaActual").val("Likes");
    $("#miTotalDePublicacionesCargadas").val("5");
    cargarPublicacionesLikes();
  });

  //Mas Comentadas
  $("#MasComentadas").click(function () {
    $("#miConsultaActual").val("Comentarios");
    $("#miTotalDePublicacionesCargadas").val("5");
    cargarPublicacionesComentarios();
  });

  //Mostrar Insert y Ocultar Edit
  $("#CrearPubliOE").click(function () {
    $("#InsertarPublicacion").show();
    $("#EditarPublicacion").hide();
    $("#miFotoCargada-Edit").hide();
  });

  //Busqueda por texto y hashtag
  $("#postSearch").on("input", function () {
    let postSearch = $(this).val();
    let hashSearch = $("#message-search").val();
    $.ajax({
      url: "http://localhost:8080/PublicacionesSearch",
      type: "GET",
      data: { texto: postSearch, hashtag: hashSearch },
    })
      .done(function (data) {
        let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();

        let miIdUsuario = $("#miUserIdActual").val();

        $("#misPublicaciones").empty();
        for (let i = 0; i < data.length; i++) {
          if (i < totalPublicaciones) {
            let texto = data[i].texto;
            let newTexto = texto.replaceAll(
              /#([A-Za-z]+)/g,
              '#<a href="#" class="hash">$1</a>'
            );
            let miPublicacion =    `
                          <div class="feed">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h3>${data[i].NombreCompleto}</h3>
                                                <small>${data[i].Fecha}</small>
                                            </div>
                                        </div>
                  `;
             if(miIdUsuario == data[i].idUsuario){
                 miPublicacion = miPublicacion + `
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                        <a class="delete" id="${data[i].id}">
                                            <h3><i class="uil uil-trash-alt"></i></h3>
                                        </a> `;
             }
                miPublicacion = miPublicacion + `</div> `  ;
             if(data[i].spoiler == "false"){
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>Esta publicacion fue marcada como spoiler
                                    </div>`  ;
             }else{
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>${newTexto}
                                    </div>`  ;
             }
             if(data[i].isImagen == 1){
                 if(data[i].spoiler == "true"){
                         miPublicacion = miPublicacion + ` 
                    <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}">
                    </div>`;
                 }else{
                      miPublicacion = miPublicacion + ` 
                      <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}" style="display:none;">
                    </div>`;
                 }
                 
             }
                     miPublicacion = miPublicacion + `                                   
                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>                                
                                      </div>
                                        <input type="hidden" value='${newTexto}' class="miTextoPostHidden">
                                        <input type="hidden" value="/ShowImagePost?id=${data[i].id}" class="miImagenPostHidden">
                                           <div class="bookmark" id="${data[i].id}">                    
                                            <span id="${data[i].idUsuario}">
                                                <i class="spoilerPost uil-eye-slash"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>
                                     <br>
                                    <div class="comments text-muted">Ver los ${data[i].TotalComentarios} comentarios</div>

                         
                   <div class="head mostrarComentarios" id="misComentarios-${data[i].id}"  style="display:block;>
                 
                                    </div>
                        <div class="head">
                            <form class="create-post" id="${data[i].id}">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                <input type="text" class="miComentarioTexto" name="comentario" placeholder="Escribe tu comentario...">                 
                                <button type="button" class="insertarComentario btn btn-primary" >Comentar</button>
                                  
                            </form>
                        </div>
                    </div>
                 </div>`  ;
                                   

                                   
                
            $("#misPublicaciones").append(miPublicacion);
                  
       
              

            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id },
              }
            )
              .done(function (data) {
                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;

                  if (data[i].spoiler == "true") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div id="${data[i].idUsuario}" class="ingo">
                                                <h5>${data[i].username}</h5> 
                                                 <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <small class="MiTexto">${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                  }
                  if (data[i].spoiler == "false") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo" id="${data[i].idUsuario}">
                                                <h5>${data[i].username}</h5>
                                                <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <input type="hidden" class="textoOculto" value="${data[i].texto}">
                                                <small class="MiTexto">Este contenido fue marcado como spoiler</small>
                                            </div>
                                        </div>
                                       `);
                  }

                  $(miBusqueda).children(".user").hide();
                }
              })
              .fail(function (data) {
                console.error(data);
              });

            if (i % 10 == 0) {
              numberPage = i / 10 + 1;
              Math.trunc(numberPage);
            }
          }
        }
      })
      .fail(function (data) {
        console.error(data);
      });
  });
  $("#message-search").on("input", function () {
    let hashSearch = $(this).val();
    let postSearch = $("#postSearch").val();
    $.ajax({
      url: "http://localhost:8080/PublicacionesSearch",
      type: "GET",
      data: { texto: postSearch, hashtag: hashSearch },
    })
    .done(function (data) {
        let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();

        let miIdUsuario = $("#miUserIdActual").val();

        $("#misPublicaciones").empty();
        for (let i = 0; i < data.length; i++) {
          if (i < totalPublicaciones) {
            let texto = data[i].texto;
            let newTexto = texto.replaceAll(
              /#([A-Za-z]+)/g,
              '#<a href="#" class="hash">$1</a>'
            );
            let miPublicacion =    `
                          <div class="feed">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h3>${data[i].NombreCompleto}</h3>
                                                <small>${data[i].Fecha}</small>
                                            </div>
                                        </div>
                  `;
             if(miIdUsuario == data[i].idUsuario){
                 miPublicacion = miPublicacion + `
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                        <a class="delete" id="${data[i].id}">
                                            <h3><i class="uil uil-trash-alt"></i></h3>
                                        </a> `;
             }
                miPublicacion = miPublicacion + `</div> `  ;
             if(data[i].spoiler == "false"){
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>Esta publicacion fue marcada como spoiler
                                    </div>`  ;
             }else{
                   miPublicacion = miPublicacion + ` 
                                    <div class="caption">                                  
                                        <p>${newTexto}
                                    </div>`  ;
             }
             if(data[i].isImagen == 1){
                 if(data[i].spoiler == "true"){
                         miPublicacion = miPublicacion + ` 
                    <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}">
                    </div>`;
                 }else{
                      miPublicacion = miPublicacion + ` 
                      <div class="photo">
                                        <img class="miImagenAttr" src="/ShowImagePost?id=${data[i].id}" style="display:none;">
                    </div>`;
                 }
                 
             }
                     miPublicacion = miPublicacion + `                                   
                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>                                
                                      </div>
                                        <input type="hidden" value='${newTexto}' class="miTextoPostHidden">
                                        <input type="hidden" value="/ShowImagePost?id=${data[i].id}" class="miImagenPostHidden">
                                           <div class="bookmark" id="${data[i].id}">                    
                                            <span id="${data[i].idUsuario}">
                                                <i class="spoilerPost uil-eye-slash"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>
                                     <br>
                                    <div class="comments text-muted">Ver los ${data[i].TotalComentarios} comentarios</div>

                         
                   <div class="head mostrarComentarios" id="misComentarios-${data[i].id}"  style="display:block;>
                 
                                    </div>
                        <div class="head">
                            <form class="create-post" id="${data[i].id}">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                <input type="text" class="miComentarioTexto" name="comentario" placeholder="Escribe tu comentario...">                 
                                <button type="button" class="insertarComentario btn btn-primary" >Comentar</button>
                                  
                            </form>
                        </div>
                    </div>
                 </div>`  ;
                                   

                                   
                
            $("#misPublicaciones").append(miPublicacion);
                  
       
              

            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id },
              }
            )
              .done(function (data) {
                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;

                  if (data[i].spoiler == "true") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div id="${data[i].idUsuario}" class="ingo">
                                                <h5>${data[i].username}</h5> 
                                                 <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <small class="MiTexto">${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                  }
                  if (data[i].spoiler == "false") {
                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo" id="${data[i].idUsuario}">
                                                <h5>${data[i].username}</h5>
                                                <span id="${data[i].idComentario}">
                                                    <i class="spoilerComment uil uil-eye-slash"></i>
                                                </span>
                                                <input type="hidden" class="textoOculto" value="${data[i].texto}">
                                                <small class="MiTexto">Este contenido fue marcado como spoiler</small>
                                            </div>
                                        </div>
                                       `);
                  }

                  $(miBusqueda).children(".user").hide();
                }
              })
              .fail(function (data) {
                console.error(data);
              });

            if (i % 10 == 0) {
              numberPage = i / 10 + 1;
              Math.trunc(numberPage);
            }
          }
        }
      })
      .fail(function (data) {
        console.error(data);
      });
  });

  //  Spoiler Click Comentarios
  $("#misPublicaciones").on("click", ".spoilerComment", funcSpoilerComments);
  function funcSpoilerComments() {
    let miIdUsuario = $("#miUserIdActual").val();
    let idComentario = $(this).parent().attr("id");
    let idUsuario = $(this).parent().parent().attr("id");
    if (idUsuario == miIdUsuario) {
      if (confirm("¿Estas seguro de marcar este comentario como spoiler?")) {
        $.ajax({
          url: "http://localhost:8080/SpoilerComentario",
          type: "POST",
          data: { id: idComentario },
        })
          .done(function (data) {
            cargarPublicaciones();

            alert("ContenidoActualizado");
          })
          .fail(function (data) {
            console.error(data);
          });
      }
    } else {
        let miComentarioHidden = $(this).parent().parent().children(".textoOculto").val();
         $(this).parent().parent().children(".MiTexto").empty();
         $(this).parent().parent().children(".MiTexto").text(miComentarioHidden);
    }
  }

  //  Spoiler Click Publicaciones
  $("#misPublicaciones").on("click", ".spoilerPost", funcSpoilerPost);
  function funcSpoilerPost() {
    let miIdUsuario = $("#miUserIdActual").val();
    let idPublicacion = $(this).parent().parent().attr("id");
    let idUsuario = $(this).parent().attr("id");
    if (idUsuario == miIdUsuario) {
      if (confirm("¿Estas seguro de marcar este comentario como spoiler?")) {
        $.ajax({
          url: "http://localhost:8080/SpoilerPost",
          type: "POST",
          data: { id: idPublicacion },
        })
          .done(function (data) {
            cargarPublicaciones();
            alert("ContenidoActualizado");
          })
          .fail(function (data) {
            console.error(data);
          });
      }
    } else {
      let miTextoSpoiler = $(this)
        .parent()
        .parent()
        .parent()
        .children(".miTextoPostHidden")
        .attr("value");
      let miSrcImagen = $(this)
        .parent()
        .parent()
        .parent()
        .children(".miImagenPostHidden")
        .attr("value");

      let miNuevoTexto ='<p>' + miTextoSpoiler;
      $(this).parent().parent().parent().parent().children(".caption").empty();
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .children(".caption")
        .append(miNuevoTexto);
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .children(".photo")
        .children(".miImagenAttr")
        .attr("src", miSrcImagen);
        $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .children(".photo")
        .children(".miImagenAttr")
        .attr("style", "");
    }
  }
});
