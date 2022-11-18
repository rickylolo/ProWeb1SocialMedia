$(document).ready(function () {
  cargarPublicaciones();
  function cargarPublicaciones() {
    $.ajax(
      //GET DATOS PUBLICACIONES
      {
        url: "http://localhost:8080/Publicaciones",
      }
    )
      .done(function (data) {
        $("#misPublicaciones").empty();
        for (let i = 0; i < data.length; i++) {
          if (i < 10) {
            let texto = data[i].texto;

            let newTexto = texto.replaceAll(
              /#([A-Za-z]+)/g,
              '#<a href="#" class="hash">$1</a>'
            );

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
                                        <span class="edit">
                                            <i class="uil uil-ellipsis-h"></i>
                                        </span>
                                    </div>

                                    <div class="photo">
                                        <img src="/ShowImagePost?id=${data[i].id}">
                                    </div>

                                    <div class="action-buttons" id="${data[i].id}">
                                        <div class="interaction-buttons" id="MisInteracciones">
                                            <span class="Usuariolike"><i class="uil uil-heart" ></i></span>
                                            <span><i class="uil uil-comment-dots"></i></span>
                                            <span><i class="uil uil-share-alt"></i></span>
                                        </div>
                                        <div class="bookmark">
                                            <span><i class="uil uil-bookmark-full"></i></span>
                                        </div>
                                    </div>

                                    <div class="liked-by">                                   
                                        <p>Le gusta a ${data[i].TotalLikes} personas</b></p>
                                    </div>

                                    <div class="caption">
                                        <p><b>${data[i].NombreCompleto}</b> ${newTexto} 
                                    </div>
                                    <div class="comments text-muted">Ver los # comentarios</div>
                                </div>
                    `
            );
          }
          if (i % 10 == 0) {
            numberPage = i / 10 + 1;
            Math.trunc(numberPage);
          }
        }
      })
      .fail(function (data) {
        console.error(data);
      });
  }
  //  ELIMINAR DINAMICO
    $("#misPublicaciones").on('click', ".Usuariolike", funcDarLike);
  function funcDarLike() {
    let miIdPublicacion = $(this).parent().parent().attr("id");
    $.ajax(
      //GET DATOS USUARIO
      {
        url: "http://localhost:8080/Like",
        type: "POST",
        data: { idPublicacion: miIdPublicacion }
      }
    )
      .done(function (data) {
        cargarPublicaciones();
      })
      .fail(function (data) {
        console.error(data);
      });
  }
});
