<%-- 
    Document   : Login y registro
    Created on : 17 oct 2022, 11:34:07
    Author     : omarr
--%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/LoginRegistrocss.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <title>Meeting point</title>
</head>
<body>
    <div class="container-form sign-up">
        <div class="welcome-back">
            <div class="message">
                <h2>Bienvenido de nuevo</h2>
                <p>Si ya tienes una cuenta inicia sesion aqui</p>
                <button class="sign-up-btn">Iniciar sesión</button>

            </div>
        </div>
        <form class="formulario" action="/Register" method="POST"  enctype="multipart/form-data">
            <h2 class="create-account">Crear una cuenta</h2>

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

            <div class="form-input emailD">
            <input type="email" id="email" name="email" placeholder="Email" title="Debe tener formato de correo electrónico válido. "> 
            <p class="mensajeError"></p>
            </div>

            <div class="form-input imagenD">
            <input type="file" id="imagen" name="imagen" accept="image/png, image/jpg">
            <p class="mensajeError"></p>
            </div>

            <div class="form-input usuarioD">
            <input type="text" id="usuario" name="usuario" placeholder="Nombre de usuario" title="Nombre de usuario.">
            <p class="mensajeError"></p>
            </div>

            <div class="form-input contraD">
            <input type="password" id="contra" name="contra" placeholder="Contraseña" title="Por lo menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un signo de puntuación.">
            <p class="mensajeError"></p>
            </div>

            <div class="form-input contra2D">
            <input type="password"id='contra2' placeholder="Confirmar contraseña">
            <p class="mensajeError"></p>
            </div>

            <input class="btn" type="submit" value="Registrarse">

        </form>
    </div>
    <div class="container-form sign-in">
        <form class="formulario2" method="/Login" action="POST">
            <h2 class="create-account">Iniciar sesion</h2>
            <div class="logo">
                <div class="border-logo">
                    <img src="images/logo.png" class= "img" alt="Meeting point">
                </div>
            </div>
            <p class="cuenta-gratis">Ingrese su datos</p>
            
            <input type="email" placeholder="Email" required> 
            <input type="password" placeholder="Contraseña" required>
            <input class="btn" type="submit" value="Iniciar sesion">
        </form>
        <div class="welcome-back">
            <div class="message">
                <h2>Bienvenido</h2>
                <p>Si aun no tienes una cuenta registrese aqui</p>
                <button class="sign-in-btn">Registrarse</button>
            </div>
        </div>
    </div>
    <script src="js/LoginRegistroScript.js"></script>
</body>
</html>
