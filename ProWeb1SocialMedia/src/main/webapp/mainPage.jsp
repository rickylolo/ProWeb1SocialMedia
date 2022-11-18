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

                <input type="hidden" value="${sessionScope[" usuario"].getId()}" id="miUserIdActual">
                <nav>
                    <div class="container">
                        <h2 class="log">
                            Meeting Point
                        </h2>
                        <div class="search-bar">
                            <i class="uil uil-search"></i>
                            <input type="search" placeholder="Buscar publicaciones">
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
                                <a class="menu-item">
                                    <span><i class="uil uil-compass"></i></span>
                                    <h3>Explora</h3>
                                </a>
                                <a class="menu-item" id="notifications">
                                    <span><i class="uil uil-bell"><small
                                                class="notification-count">9+</small></i></span>
                                    <h3>Notificaciones</h3>
                                    <!-------------------- NOTIFICATION POPUP ---------------->
                                    <div class="notifications-popup">
                                        <div>
                                            <div class="profile-photo">
                                                <img src="images/profile-2.jpg">
                                            </div>
                                            <div class="notification-body">
                                                <b>Keke Benjamin</b> accepted your friend request
                                                <small class="text-muted">2 DAYS AGO</small>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="profile-photo">
                                                <img src="./images/profile-3.jpg">
                                            </div>
                                            <div class="notification-body">
                                                <b>John Doe</b> commented on your post
                                                <small class="text-muted">1 HOUR AGO</small>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="profile-photo">
                                                <img src="./images/profile-4.jpg">
                                            </div>
                                            <div class="notification-body">
                                                <b>Mary Oppong</b> and <b>283 others </b> liked your post
                                                <small class="text-muted">4 MINUTES AGO</small>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="profile-photo">
                                                <img src="./images/profile-5.jpg">
                                            </div>
                                            <div class="notification-body">
                                                <b>Doris Y. Lartey</b> commented on a post you are tagged in
                                                <small class="text-muted">2 DAYS AGO</small>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="profile-photo">
                                                <img src="./images/profile-6.jpg">
                                            </div>
                                            <div class="notification-body">
                                                <b>Donald Trump</b> commented on a post you are tagged in
                                                <small class="text-muted">1 HOUR AGO</small>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="profile-photo">
                                                <img src="./images/profile-7.jpg">
                                            </div>
                                            <div class="notification-body">
                                                <b>jane Doe</b> commented on your post
                                                <small class="text-muted">1 HOUR AGO</small>
                                            </div>
                                        </div>
                                    </div>
                                    <!-------------------- END NOTIFICATION POPUP ---------------->
                                </a>
                                <a class="menu-item" id="messages-notification">
                                    <span><i class="uil uil-envelope-alt"><small
                                                class="notification-count">6</small></i></span>
                                    <h3>Mensajes</h3>
                                </a>

                                <a class="menu-item" id="theme">
                                    <span><i class="uil uil-palette"></i></span>
                                    <h3>Tema</h3>
                                </a>
                                <a class="menu-item">
                                    <span><i class="uil uil-setting"></i></span>
                                    <h3>Configuración</h3>
                                </a>
                            </div>
                            <!------------------- END OF SIDEBAR -------------------->
                            <label for="create-post" class="btn btn-primary">Crear Publicaciï¿½n</label>
                        </div>
                        <!------------------- END OF LEFT -------------------->



                        <!--======================== MIDDLE ==========================-->
                        <div class="middle">
                            <!------------------- STORIES -------------------->
                            <div class="stories">
                                <div class="story">
                                    <div class="profile-photo">
                                        <img src="/ShowImage">
                                    </div>
                                    <p class="name">Your Story</p>
                                </div>
                                <div class="story">
                                    <div class="profile-photo">
                                        <img src="images/profile-014.png">
                                    </div>
                                    <p class="name">FCFM UANL (OFICIAL)</p>
                                </div>
                                <div class="story">
                                    <div class="profile-photo">
                                        <img src="images/profile-15.png">
                                    </div>
                                    <p class="name">Adopta Monterrey</p>
                                </div>
                                <div class="story">
                                    <div class="profile-photo">
                                        <img src="images/profile-016.jpg">
                                    </div>
                                    <p class="name">Cristiano Ronaldo</p>
                                </div>
                                <div class="story">
                                    <div class="profile-photo">
                                        <img src="images/profile-16.jpg">
                                    </div>
                                    <p class="name">Suri Cz</p>
                                </div>
                                <div class="story">
                                    <div class="profile-photo">
                                        <img src="images/profile-17.jpg">
                                    </div>
                                    <p class="name">Marisol Acosta</p>
                                </div>
                            </div>
                            <!------------------- END OF STORIES -------------------->
                            <div class="feed">
                                    <div class="head">
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
                            </div>

                         
                                    <!------------------- Editar Usuario --------------------->
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
                                <!---------------- END OF FEED ----------------->
                                   <!------------------- FEEDS --------------------->
                            <div class="feeds" id="misPublicaciones">
                          
                              
                     
                            </div>
                            <!------------------------------- END OF FEEDS ------------------------------------>
                        </div>
                        <!--======================== END OF MIDDLE ==========================-->


                        <!--======================== RIGHT ==========================-->
                        <div class="right">
                            <div class="messages">
                                <div class="heading">
                                    <h4>Messages</h4><i class="uil uil-edit"></i>
                                </div>
                                <!------------ SEARCH BAR -------------->
                                <div class="search-bar">
                                    <i class="uil uil-search"></i>
                                    <input type="search" placeholder="Search messages" id="message-search">
                                </div>
                                <!------------ MESSAGES CATEGORY -------------->
                                <div class="category">
                                    <h6 class="active">Primary</h6>
                                    <h6>General</h6>
                                    <h6 class="message-requests">Requests(7)</h6>
                                </div>
                                <!------------ MESSAGE -------------->
                                <!----- MESSAGE ----->
                                <div class="message">
                                    <div class="profile-photo">
                                        <img src="./images/profile-2.jpg">
                                    </div>
                                    <div class="message-body">
                                        <h5>Edem Quist</h5>
                                        <p class="text-muted">Just woke up bruh</p>
                                    </div>
                                </div>
                                <!----- MESSAGE ----->
                                <div class="message">
                                    <div class="profile-photo">
                                        <img src="./images/profile-3.jpg">
                                        <div class="active"></div>
                                    </div>
                                    <div class="message-body">
                                        <h5>Franca Deila</h5>
                                        <p class="text-bold">Received bruh. Thanks!</p>
                                    </div>
                                </div>
                                <!----- MESSAGE ----->
                                <div class="message">
                                    <div class="profile-photo">
                                        <img src="./images/profile-4.jpg">
                                    </div>
                                    <div class="message-body">
                                        <h5>Jane Doe</h5>
                                        <p class="text-bold">ok</p>
                                    </div>
                                </div>
                                <!----- MESSAGE ----->
                                <div class="message">
                                    <div class="profile-photo">
                                        <img src="./images/profile-5.jpg">
                                    </div>
                                    <div class="message-body">
                                        <h5>Daniella Jackson</h5>
                                        <p class="text-bold">2 new messages</p>
                                    </div>
                                </div>
                                <!----- MESSAGE ----->
                                <div class="message">
                                    <div class="profile-photo">
                                        <img src="./images/profile-6.jpg">
                                    </div>
                                    <div class="message-body">
                                        <h5>Juliet Makarey</h5>
                                        <p class="text-muted">lol u right</p>
                                    </div>
                                </div>
                                <!----- MESSAGE ----->
                                <div class="message">
                                    <div class="profile-photo">
                                        <img src="./images/profile-7.jpg">
                                        <div class="active"></div>
                                    </div>
                                    <div class="message-body">
                                        <h5>Chantel Msiza</h5>
                                        <p class="text-bold">Birthday Tomorrow!</p>
                                    </div>
                                </div>
                            </div>
                            <!------------ END OF MESSAGES -------------->


                            <!------------ FRIEND REQUESTS -------------->
                            <div class="friend-requests">
                                <h4>Requests</h4>
                                <!----- REQUEST 1----->
                                <div class="request">
                                    <div class="info">
                                        <div class="profile-photo">
                                            <img src="./images/profile-8.jpg">
                                        </div>
                                        <div>
                                            <h5>Hajia Bintu</h5>
                                            <p class="text-muted">8 mutual friends</p>
                                        </div>
                                    </div>
                                    <div class="action">
                                        <button class="btn btn-primary">Accept</button>
                                        <button class="btn">Decline</button>
                                    </div>
                                </div>
                                <!----- REQUEST 2----->
                                <div class="request">
                                    <div class="info">
                                        <div class="profile-photo">
                                            <img src="./images/profile-9.jpg">
                                        </div>
                                        <div>
                                            <h5>Jackline Mensah</h5>
                                            <p class="text-muted">2 mutual friends</p>
                                        </div>
                                    </div>
                                    <div class="action">
                                        <button class="btn btn-primary">Accept</button>
                                        <button class="btn">Decline</button>
                                    </div>
                                </div>
                                <!----- REQUEST 3----->
                                <div class="request">
                                    <div class="info">
                                        <div class="profile-photo">
                                            <img src="./images/profile-10.jpg">
                                        </div>
                                        <div>
                                            <h5>Jennifer Lawrence</h5>
                                            <p class="text-muted">19 mutual friends</p>
                                        </div>
                                    </div>
                                    <div class="action">
                                        <button class="btn btn-primary">Accept</button>
                                        <button class="btn">Decline</button>
                                    </div>
                                </div>
                            </div>
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