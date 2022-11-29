<%@page import="DTO.UserDTO" %>
    <%@page import="DTO.PublicacionDTO" %>
        <%@page import="java.util.ArrayList" %>
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Meeting Point - Responsive Social Media Website Using HTML, CSS & JavaScript</title>
                <!-- ICONSCOUT CDN -->
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css">
                <!-- STYLESHEET -->
                <link rel="stylesheet" href="css/style.css">
            </head>

            <body>

                <input type="hidden" value="${sessionScope["usuario"].getId()}" id="miUserIdActual">
                  <input type="hidden" value="" id="miConsultaActual">
                <nav>
                    <div class="container">
                        <h2 class="log">
                            Meeting Point
                        </h2>
                        <div class="search-bar">
                            <i class="uil uil-search"></i>
                            <input type="search" id="postSearch" placeholder="Buscar publicaciones">
                        </div>
                        <div class="create">
              
                            <label class="btn btn-primary" for="create-post" id="pfp-abrir">Editar</label>
                            <div class="profile-photo">
                                <img src="/ShowImage">
                            </div>
                            <!-- menu button to show sidebar -->
                            <button id="menu-btn"><i class="uil uil-bars"></i></button>
                        </div>
                    </div>
                </nav>

                <!------------------------- MAIN -------------------------->
                <main>
                    <div class="container">
                        <!--======================== LEFT ==========================-->
                        <div class="left">
                            <a class="profile">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                <div class="handle">
                                    <h4 id="miNombreLoged"></h4>
                                    <p class="text-muted" id="miUsuarioLoged">

                                    </p>
                                </div>
                            </a>

                            <!-- close button -->
                            <span id="close-btn"><i class="uil uil-multiply"></i></span>

                            <!-------------------- SIDEBAR ------------------------->
                            <div class="sidebar">
                                <a class="menu-item active">
                                    <span><i class="uil uil-home"></i></span>
                                    <h3>Inicio</h3>
                                </a>
                                <a class="menu-item" id="messages-notification">
                                    <span><i class="uil uil-users-alt"></i></span>
                                    <h3>Usuarios</h3>
                                </a>

                                <a class="menu-item" id="theme">
                                    <span><i class="uil uil-palette"></i></span>
                                    <h3>Tema</h3>
                                </a>
                                 <a class="menu-item">
                                <form action="/Logout" method="POST" class="miform">
                                <button type="submit"  class="miform">
                                    
                                        <span ><i class="uil uil-sign-out-alt"></i></span>
                                    <h3>Salir</h3>
                                  
                              
                                    </button>
                                </form>
                                 </a>
                            </div>
                            <!------------------- END OF SIDEBAR -------------------->
                            <label id="CrearPubliOE" for="create-post" class="btn btn-primary">Crear Publicación</label>
                        </div>
                        <!------------------- END OF LEFT -------------------->



                        <!--======================== MIDDLE ==========================-->
                        <div class="middle">
                        
                            <div class="feed">
                                  <!------------------- Insertar Publicacion--------------------->
                                    <div class="head" id="InsertarPublicacion">
                            <form class="create-post" action="/Publicaciones" method="POST"  enctype="multipart/form-data">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                 <input type="hidden" name="accion" value="insertar">
                                <input type="text" name="texto" id="create-post">
                                 <label class="btn" for="file-input"><i class="uil uil-camera-plus"></i></label>
                                   <input id="file-input" style="display:none;" onchange="vista_preliminar(event)" name="foto" type="file"/>
                                <button type="submit" class="btn btn-primary">Publicar</button>
                                  
                            </form>
                                    </div>
                                 <div class="photo" id="miFotoCargada">
                                        <img src="images/noPhoto.jpg" id="img-foto">
                                    </div>
                                  <!------------------- Editar Publicacion --------------------->
                                                    <div class="head" id="EditarPublicacion">
                            <form class="create-post" action="/Publicaciones" method="POST" id="EditarPost"  enctype="multipart/form-data">
                                <div class="profile-photo">
                                    <img src="/ShowImage">
                                </div>
                                 <input type="hidden" name="accion" value="actualizar">
                                 <input type="hidden" name="idPublicacion" id="idPublicacionEdit"  value="actualizar">
                                <input type="text" name="texto" id="miTextoEditar">
                                 <label class="btn" for="file-input-edit"><i class="uil uil-camera-plus"></i></label>
                                   <input id="file-input-edit" style="display:none;" onchange="vista_preliminar2(event)" name="foto-edit" type="file">
                                <button type="submit" class="btn btn-primary">Actualizar</button>
                                  
                            </form>
                                    </div>
                                 <div class="photo" id="miFotoCargada-Edit">
                                        <img src="images/noPhoto.jpg" id="img-foto-edit">
                                    </div>
                            </div>

                         
                                    <!------------------- Editar Usuario --------------------->
                                    <div class="feeds">
                                <div class="feed" id="miEditPerfil">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/ShowImage">
                                            </div>
                                            <div class="ingo">
                                                <h3 id="E_miUsuario"></h3>   
                                                <small>Editando usuario</small>
                                            </div>
                                        </div>
                                        <span class="edit">
                                            <i class="uil uil-ellipsis-h"></i>
                                        </span>
                                    </div>
                                 <form class="formulario" action="/Edit" method="POST"  enctype="multipart/form-data">
       
            <input type="hidden" name="accion" value="actualizar">
            <div class="form-input nameD">
            <input type="text" id="name" name="name" placeholder="Nombre" title="Nombre(s) solo puede incluir letras del alfabeto español y espacios en blanco.">
            <p class="mensajeError"></p>
            </div>

            <div class="form-input apellidoD">
            <input type="text" id="apellido" name="apellido" placeholder="Apellidos" title="Solo puede incluir letras del alfabeto español y espacios en blanco.">
            <p class="mensajeError"></p>
            </div>
            
                 <div class="form-input fechaD">
            <input type="date" id="fecha" name="fecha" placeholder="Fecha de nacimiento" title="El usuario debe ser mayor de 13 años.">
            <p class="mensajeError"></p>
            </div>

            <div class="form-input imagenD">
            <input type="file" id="imagen" name="imagen" accept="image/png, image/jpg">
            <p class="mensajeError"></p>
            </div>
            
            <div class="form-input contraD">
            <input type="password" id="contra" name="contra" placeholder="Contraseña" title="Por lo menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un signo de puntuación.">
            <p class="mensajeError"></p>
            </div>   
            <input class="btn btn-primary" type="submit" value="Actualizar">

        </form>
                             
                                </div>
                                    </div>
                                <!---------------- END OF FEED ----------------->
                                   <!------------------- FEEDS --------------------->
                            <div class="feeds" id="misPublicaciones">
                          
                              
                     
                            </div>
                                   <input type="hidden" value="10" id="miTotalDePublicacionesCargadas">
                                   <Button class="btn btn-primary" type="button" id="CargarMas" >Cargar Mas</button>
                                   <div class="feeds">
                                    <div class="feed">
                                    <div class="head">
                                        <div class="user">
                                            <div class="profile-photo">
                                                <img src="/images/feed-5.jpg">
                                            </div>
                                            <div class="ingo">
                                                <h3>Suri Cz</h3>   
                                                <small>FrontEnd Developer</small>
                                            </div>
                                        </div>
                                      
                                         <div class="user">
                                            <div class="profile-photo">
                                                <img src="/images/profile-1.jpg">
                                            </div>
                                            <div class="ingo">
                                                <h3>Omar</h3>   
                                                <small>BackEnd Developer</small>
                                            </div>
                                        </div>
                                 
                                    </div>
                                    </div>
                                    </div>
                            <!------------------------------- END OF FEEDS ------------------------------------>
                        </div>
                        <!--======================== END OF MIDDLE ==========================-->


                        <!--======================== RIGHT ==========================-->
                        <div class="right">
                            <div class="messages" id="misUsuarios">
                                <div class="heading">
                                    <h4>Hashtag</h4><i class="uil uil-comment-alt-search"></i>
                                </div>
                                <!------------ SEARCH BAR -------------->
                                <div class="search-bar">
                                    <i class="uil uil-search"></i>
                                    <input type="search" placeholder="Buscar hashtags" id="message-search">
                                </div>
                                <!------------ MESSAGES CATEGORY -------------->
                                <div class="category">
                                    <h6 class="active" id="MasRecientes">+ Recientes</h6>
                                    <h6 class="active" id="MasLikes">+ Votadas</h6>
                                    <h6 class="active" id="MasComentadas">+ Comentadas</h6>
                                </div>
                                <!------------ MESSAGE -------------->
                                <!----- MESSAGE ----->
                                 <div class="heading">
                                    <h4>Usuarios</h4><i class="uil uil-user"></i>
                                </div>
                                
                                
                          
                               
                            </div>
                            <!------------ END OF MESSAGES -------------->
                        </div>
                    </div>
                    <!--====================== END OF RIGHT ==========================-->
                    </div>
                </main>

                <!--================================================ THEME CUSTOMIZATION =============================================-->
                <div class="customize-theme">
                    <div class="card">
                        <h2>Customize your view</h2>
                        <p class="text-muted">Manage your font size, color, and background.</p>

                        <!------------ FONT SIZES ------------->
                        <div class="font-size">
                            <h4>Font Size</h4>
                            <div>
                                <h6>Aa</h6>
                                <div class="choose-size">
                                    <span class="font-size-1"></span>
                                    <span class="font-size-2"></span>
                                    <span class="font-size-3"></span>
                                    <span class="font-size-4"></span>
                                    <span class="font-size-5"></span>
                                </div>
                                <h3>Aa</h3>
                            </div>
                        </div>

                        <!------------ PRIMARY COLORS ------------->
                        <div class="color">
                            <h4>Color</h4>
                            <div class="choose-color">
                                <span class="color-1 active"></span>
                                <span class="color-2"></span>
                                <span class="color-3"></span>
                                <span class="color-4"></span>
                                <span class="color-5"></span>
                            </div>
                        </div>

                        <!---------- BACKGROUND COLORS ------------>
                        <div class="background">
                            <h4>Background</h4>
                            <div class="choose-bg">
                                <div class="bg-1 active">
                                    <span></span>
                                    <h5 for="bg-1">Light</h5>
                                </div>
                                <div class="bg-2">
                                    <span></span>
                                    <h5>Dim</h5>
                                </div>
                                <div class="bg-3">
                                    <span></span>
                                    <h5 for="bg-3">Lights Out</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="js/jquery-3.6.0.js"></script>
                <script src="js/index.js"></script>
                <script src="js/mainScript.js"></script>
                <script src="js/publicacionScript.js"></script>
            </body>

            
            </html>