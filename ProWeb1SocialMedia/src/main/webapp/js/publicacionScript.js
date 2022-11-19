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
            if(miIdUsuario == data[i].idUsuario){
                
            if (data[i].isImagen != 1) {
              $("#misPublicaciones").append(
                `
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
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                    </div>

                                   <div class="caption">
                                        <p><b style="display: block;">${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
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
                                </div>
                    `
              );
            } else {
              $("#misPublicaciones").append(
                `
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
                                        <a class="edit"  href="#" id="${data[i].idUsuario}">
                                           <h3><i class="uil uil-pen" ></i></h3>
                                        </a>
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
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
                                </div>
                    `
              );
              
            }
            }else{
                  if (data[i].isImagen != 1) {
              $("#misPublicaciones").append(
                `
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
                                    </div>

                                   <div class="caption">
                                        <p><b style="display: block;">${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
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
                                </div>
                    `
              );
            } else {
              $("#misPublicaciones").append(
                `
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
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
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
                                </div>
                    `
              );
              
            }
            }
            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id }
              }
            )
              .done(function (data) {
 

                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;
           if(miIdUsuario == data[i].idUsuario){
                  $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h5>${data[i].username}</h5> <span class="delete" id="${data[i].idComentario}">
                                            <i class="uil uil-trash"></i>
                                        </span>
                                                <small>${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                      }else{
                                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h5>${data[i].username}</h5>
                                                <small>${data[i].texto}</small>
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
            if(miIdUsuario == data[i].idUsuario){
                
            if (data[i].isImagen != 1) {
              $("#misPublicaciones").append(
                `
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
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                    </div>

                                   <div class="caption">
                                        <p><b style="display: block;">${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
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
                                </div>
                    `
              );
            } else {
              $("#misPublicaciones").append(
                `
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
                                        <a class="edit"  href="#" id="${data[i].idUsuario}">
                                           <h3><i class="uil uil-pen" ></i></h3>
                                        </a>
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
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
                                </div>
                    `
              );
              
            }
            }else{
                  if (data[i].isImagen != 1) {
              $("#misPublicaciones").append(
                `
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
                                    </div>

                                   <div class="caption">
                                        <p><b style="display: block;">${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
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
                                </div>
                    `
              );
            } else {
              $("#misPublicaciones").append(
                `
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
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
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
                                </div>
                    `
              );
              
            }
            }
            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id }
              }
            )
               .done(function (data) {
 

                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;
           if(miIdUsuario == data[i].idUsuario){
                  $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h5>${data[i].username}</h5> <span class="delete" id="${data[i].idComentario}">
                                            <i class="uil uil-trash"></i>
                                        </span>
                                                <small>${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                      }else{
                                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h5>${data[i].username}</h5>
                                                <small>${data[i].texto}</small>
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
            if(miIdUsuario == data[i].idUsuario){
                
            if (data[i].isImagen != 1) {
              $("#misPublicaciones").append(
                `
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
                                        <a class="edit" id="${data[i].idUsuario}" href="#">
                                            <h3><i class="uil uil-pen"></i></h3>
                                        </a>
                                    </div>

                                   <div class="caption">
                                        <p><b style="display: block;">${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
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
                                </div>
                    `
              );
            } else {
              $("#misPublicaciones").append(
                `
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
                                        <a class="edit"  href="#" id="${data[i].idUsuario}">
                                           <h3><i class="uil uil-pen" ></i></h3>
                                        </a>
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
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
                                </div>
                    `
              );
              
            }
            }else{
                  if (data[i].isImagen != 1) {
              $("#misPublicaciones").append(
                `
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
                                    </div>

                                   <div class="caption">
                                        <p><b style="display: block;">${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
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
                                </div>
                    `
              );
            } else {
              $("#misPublicaciones").append(
                `
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
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                  
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-eye-slash"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
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
                                </div>
                    `
              );
              
            }
            }
            $.ajax(
              //Mostrar Comentarios
              {
                url: "http://localhost:8080/Comentario",
                data: { idPublicacion: data[i].id }
              }
            )
                .done(function (data) {
 

                for (let i = 0; i < data.length; i++) {
                  let miBusqueda = "#misComentarios-" + data[i].idPublicacion;
           if(miIdUsuario == data[i].idUsuario){
                  $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h5>${data[i].username}</h5> <span class="delete" id="${data[i].idComentario}">
                                            <i class="uil uil-trash"></i>
                                        </span>
                                                <small>${data[i].texto}</small>
                                            </div>
                                        </div>
                                       `);
                      }else{
                                    $(miBusqueda).append(`
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImageUser?id=${data[i].idUsuario}">
                                            </div>
                                            <div class="ingo">
                                                <h5>${data[i].username}</h5>
                                                <small>${data[i].texto}</small>
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
    $.ajax(
      {
        url: "http://localhost:8080/Like",
        type: "POST",
        data: { idPublicacion: miIdPublicacion },
      }
    )
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
  $("#misPublicaciones").on(
    "click",
    ".insertarComentario",
    funcInsertComentario
  );
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
  
  $("#CargarMas").click(function()
  {
      let totalPublicaciones = $("#miTotalDePublicacionesCargadas").val();  
      let consultaCasos = $("#miConsultaActual").val(); 
      totalPublicaciones = totalPublicaciones + 5;
      $("#miTotalDePublicacionesCargadas").val(totalPublicaciones);
      switch(consultaCasos){
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
      let idPublicacion = $(this).parent().parent().children(".action-buttons").attr("id");
      $("#idPublicacionEdit").val(idPublicacion);
      $.ajax(
      {
        url: "http://localhost:8080/PublicacionId",
        data: { id: idPublicacion }
      }
    )
      .done(function (data) {
          
        $("#miTextoEditar").val(data[0].texto);
        $("#miFotoCargada-Edit").show();
        $("#img-foto-edit").attr("src","/ShowImagePost?id=" + data[0].id);
        $("#InsertarPublicacion").hide();
        $("#EditarPublicacion").show();
      })
      .fail(function (data) {
        console.error(data);
      });
     
  }
  
  
    //  ELIMINAR PUBLICACION   PENDIENTEE
  $("#misPublicaciones").on("click", ".delete", funcEliminarPublicacion);
  function funcEliminarPublicacion() {
      let idPublicacion = $(this).parent().parent().children(".action-buttons").attr("id");
      if(confirm("¿Estas seguro de eliminar esta publicación?")){
            $.ajax(
      {
        url: "http://localhost:8080/PublicacionId",
        data: { accion: "eliminar",id: idPublicacion }
      }
    )
      .done(function (data) {
          
        $("#miTextoEditar").val(data[0].texto);
        $("#miFotoCargada-Edit").show();
        $("#img-foto-edit").attr("src","/ShowImagePost?id=" + data[0].id);
        $("#InsertarPublicacion").hide();
        $("#EditarPublicacion").show();
      })
      .fail(function (data) {
        console.error(data);
      });
      }
    
     
  }
 
 //Mas Recientes
 $("#MasRecientes").click(function()
  {
      $("#miConsultaActual").val("Recientes");
      $("#miTotalDePublicacionesCargadas").val("5");
      cargarPublicaciones();
  });
  
   //Mas Likes
 $("#MasLikes").click(function()
  {
      $("#miConsultaActual").val("Likes");
       $("#miTotalDePublicacionesCargadas").val("5");
      cargarPublicacionesLikes();
  });
  
    //Mas Comentadas
 $("#MasComentadas").click(function()
  {
      $("#miConsultaActual").val("Comentarios");
       $("#miTotalDePublicacionesCargadas").val("5");
      cargarPublicacionesComentarios();
  });

  
});
