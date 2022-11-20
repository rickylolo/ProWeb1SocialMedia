
USE MeetingPoint;
DROP PROCEDURE IF EXISTS InsertarUsuario;
DELIMITER //
CREATE PROCEDURE InsertarUsuario(IN u_Nombre VARCHAR(50),IN u_Apellidos VARCHAR(50),IN u_FechaNacimiento DATE,IN u_Correo VARCHAR(100),IN u_ImagenPerfil MEDIUMBLOB,IN u_NombreUsuario VARCHAR(50),IN u_Contra VARCHAR(30))
BEGIN 
   DECLARE u_id int;
   INSERT INTO Usuarios(Nombre,Apellidos,FechaNacimiento,Correo,ImagenPerfil,NombreUsuario,Contra,FechaCreacion) 
   VALUES (u_Nombre,u_Apellidos,u_FechaNacimiento,u_Correo,u_ImagenPerfil,u_NombreUsuario,u_Contra,DATE(now()));
   SET u_id = last_insert_id();
   SELECT * FROM Usuarios WHERE CveUsuario = u_id;
END //

DROP PROCEDURE IF EXISTS ActualizarUsuario;
DELIMITER //
CREATE PROCEDURE ActualizarUsuario(IN u_id INT,IN u_Nombre VARCHAR(50),IN u_Apellidos VARCHAR(50),IN u_FechaNacimiento VARCHAR(20),IN u_ImagenPerfil MEDIUMBLOB,IN u_Contra VARCHAR(30))
BEGIN 
  SET u_Nombre=IF(u_Nombre='',NULL,u_Nombre),
	  u_Apellidos=IF(u_Apellidos='',NULL,u_Apellidos),
      u_ImagenPerfil=IF(u_ImagenPerfil='',NULL,u_ImagenPerfil),
      u_Contra=IF(u_Contra='',NULL,u_Contra),
      u_FechaNacimiento=IF(u_FechaNacimiento='',NULL,u_FechaNacimiento);
   UPDATE Usuarios SET
          Nombre = IFNULL(u_Nombre,Nombre),
		  Apellidos = IFNULL(u_Apellidos,Apellidos),
		  FechaNacimiento = IFNULL(u_FechaNacimiento,FechaNacimiento) ,
	      ImagenPerfil = IFNULL(u_ImagenPerfil,ImagenPerfil),
		  Contra = IFNULL(u_Contra,Contra) 
   WHERE CveUsuario = u_id;
   SELECT * FROM Usuarios WHERE CveUsuario = u_id;
END //

DELIMITER ;
DROP PROCEDURE IF EXISTS LoginUsuario;
DELIMITER //
CREATE PROCEDURE LoginUsuario(IN u_Correo VARCHAR(100),IN u_Contra VARCHAR(30))
BEGIN 
   DECLARE u_id int;
  SELECT CveUSuario FROM Usuarios WHERE Correo = u_Correo AND Contra = u_Contra;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS getUserData;
DELIMITER //
CREATE PROCEDURE getUserData(IN u_Id INT)
BEGIN 
  SELECT CveUsuario,Nombre,Apellidos,FechaNacimiento,Correo,ImagenPerfil,NombreUsuario FROM Usuarios WHERE CveUSuario = u_Id;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getAllUsers;
DELIMITER //
CREATE PROCEDURE getAllUsers()
BEGIN 
  SELECT CveUsuario,Nombre,Apellidos,NombreUsuario FROM Usuarios
  LIMIT 15;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getAllPosts;
DELIMITER //
CREATE PROCEDURE getAllPosts()
BEGIN 
  SELECT CvePubli,Texto,Spoiler,Publicaciones.FechaCreacion, Publicaciones.IdUsuario,IF(Imagen='',0,1) AS isImagen, CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto, (SELECT COUNT(*) FROM Likes WHERE IdPubli = CvePubli) AS TotalLikes, (SELECT COUNT(*) FROM Comentarios WHERE IdPublicacion = CvePubli) AS TotalComentarios FROM Publicaciones 
  INNER JOIN Usuarios ON CveUsuario = Publicaciones.IdUsuario 
  WHERE Activo = 1 ORDER BY CvePubli DESC;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getPostId;
DELIMITER //
CREATE PROCEDURE getPostId(IN u_CvaPubli INT)
BEGIN 
  SELECT CvePubli,Texto,Spoiler,Publicaciones.FechaCreacion, Publicaciones.IdUsuario,IF(Imagen='',0,1) AS isImagen, CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto, (SELECT COUNT(*) FROM Likes WHERE IdPubli = CvePubli) AS TotalLikes, (SELECT COUNT(*) FROM Comentarios WHERE IdPublicacion = CvePubli) AS TotalComentarios FROM Publicaciones 
  INNER JOIN Usuarios ON CveUsuario = Publicaciones.IdUsuario 
  WHERE Activo = 1 AND CvePubli = u_CvaPubli;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getAllPostsOrderByLikes;
DELIMITER //
CREATE PROCEDURE getAllPostsOrderByLikes()
BEGIN 
  SELECT CvePubli,Texto,Spoiler,Publicaciones.FechaCreacion, Publicaciones.IdUsuario,IF(Imagen='',0,1) AS isImagen, CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto, (SELECT COUNT(*) FROM Likes WHERE IdPubli = CvePubli) AS TotalLikes, (SELECT COUNT(*) FROM Comentarios WHERE IdPublicacion = CvePubli) AS TotalComentarios FROM Publicaciones 
  INNER JOIN Usuarios ON CveUsuario = Publicaciones.IdUsuario 
  WHERE Activo = 1 ORDER BY TotalLikes DESC;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getAllPostsOrderByComments;
DELIMITER //
CREATE PROCEDURE getAllPostsOrderByComments()
BEGIN 
  SELECT CvePubli,Texto,Spoiler,Publicaciones.FechaCreacion, Publicaciones.IdUsuario,IF(Imagen='',0,1) AS isImagen, CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto, (SELECT COUNT(*) FROM Likes WHERE IdPubli = CvePubli) AS TotalLikes, (SELECT COUNT(*) FROM Comentarios WHERE IdPublicacion = CvePubli) AS TotalComentarios FROM Publicaciones 
  INNER JOIN Usuarios ON CveUsuario = Publicaciones.IdUsuario 
  WHERE Activo = 1 ORDER BY TotalComentarios DESC;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS InsertarPublicacion;
DELIMITER //
CREATE PROCEDURE InsertarPublicacion(IN u_Texto VARCHAR(280),IN u_Imagen MEDIUMBLOB,IN u_IdUsuario INT)
BEGIN 
   DECLARE u_id int;
   INSERT INTO Publicaciones(Texto,Imagen,IdUsuario,FechaCreacion) 
   VALUES (u_Texto,u_Imagen,u_IdUsuario,now());
   SET u_id = last_insert_id();
   SELECT * FROM Publicaciones WHERE CvePubli = u_id;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS ActualizarPublicacion;
DELIMITER //
CREATE PROCEDURE ActualizarPublicacion(IN u_CvePubli INT,IN u_Texto VARCHAR(280),IN u_Imagen MEDIUMBLOB)
BEGIN 
   SET u_Texto=IF(u_Texto='',NULL,u_Texto),
	   u_Imagen=IF(u_Imagen='',NULL,u_Imagen);
   UPDATE Publicaciones SET 
		 Texto = IFNULL(u_Texto,Texto),
		 Imagen = IFNULL(u_Imagen,Imagen)		
         WHERE CvePubli = u_CvePubli;
   SELECT * FROM Publicaciones WHERE CvePubli = u_CvePubli AND Activo = 1;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS EliminarPublicacion;
DELIMITER //
CREATE PROCEDURE EliminarPublicacion(IN u_CvePubli INT)
BEGIN 
   UPDATE Publicaciones SET Activo = 0 WHERE CvePubli = u_CvePubli;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS InsertarLike;
DELIMITER //
CREATE PROCEDURE InsertarLike(IN u_CvePubli INT, IN u_CveUsuario INT)
BEGIN 
   IF(SELECT COUNT(*) AS TOTAL FROM Likes WHERE IdPubli = u_CvePubli AND  IdUsuario = u_CveUsuario) = 0
	THEN
   INSERT Likes (IdPubli,IdUsuario) VALUES (u_CvePubli,u_CveUsuario);
      ELSE 
   DELETE FROM Likes WHERE IdPubli = u_CvePubli AND  IdUsuario = u_CveUsuario;
   END IF;

END //
DELIMITER ;


DROP PROCEDURE IF EXISTS InsertarComentario;
DELIMITER //
CREATE PROCEDURE InsertarComentario(IN u_Texto VARCHAR(280),IN u_IdUsuario INT,IN IdPublicacion INT)
BEGIN 
   INSERT INTO Comentarios(Texto,IdUsuario,IdPublicacion,FechaCreacion) 
   VALUES (u_Texto,u_IdUsuario,IdPublicacion,now());
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getAllComentariosPost;
DELIMITER //
CREATE PROCEDURE getAllComentariosPost(IN u_IdPublicacion INT)
BEGIN 
   SELECT CveComentario,Texto,IdUsuario,Spoiler,IdPublicacion,CONCAT("@",NombreUsuario) AS Username FROM Comentarios
   INNER JOIN Usuarios ON CveUsuario = IdUsuario
   WHERE IdPublicacion = u_IdPublicacion
   ORDER BY CveComentario DESC;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS searchPosts;
DELIMITER //
CREATE PROCEDURE searchPosts(IN u_texto varchar(50),IN u_hashtag varchar(30))
BEGIN 
 SELECT CvePubli,Texto,Spoiler,Publicaciones.FechaCreacion, Publicaciones.IdUsuario,IF(Imagen='',0,1) AS isImagen, CONCAT(Nombre, ' ', Apellidos) AS NombreCompleto, (SELECT COUNT(*) FROM Likes WHERE IdPubli = CvePubli) AS TotalLikes, (SELECT COUNT(*) FROM Comentarios WHERE IdPublicacion = CvePubli) AS TotalComentarios 
 FROM Publicaciones 
  INNER JOIN Usuarios ON CveUsuario = Publicaciones.IdUsuario 
  WHERE Activo = 1 
	AND (u_texto = "" OR u_texto IS NULL OR Texto LIKE CONCAT("%",u_texto,"%")) 
    AND (u_hashtag = "" OR u_hashtag IS NULL OR Texto LIKE CONCAT("%#",u_hashtag,"%")) 
    AND (u_fecha1 = "" OR u_fecha1 IS NULL OR FechaCreacion )
    ORDER BY CvePubli DESC;

END //
DELIMITER ;


DROP PROCEDURE IF EXISTS comentarioSpoiler;
DELIMITER //
CREATE PROCEDURE comentarioSpoiler(IN idComentario INT)
BEGIN 
	IF(SELECT Spoiler FROM Comentarios WHERE CveComentario = idComentario) = 1
    THEN
     UPDATE Comentarios SET Spoiler = 0 WHERE CveComentario = idComentario;
    ELSE
   UPDATE Comentarios SET Spoiler = 1 WHERE CveComentario = idComentario;
   END IF;
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS postSpoiler;
DELIMITER //
CREATE PROCEDURE postSpoiler(IN idPost INT)
BEGIN 
	IF(SELECT Spoiler FROM Publicaciones WHERE CvePubli = idPost) = 1
    THEN
     UPDATE Publicaciones SET Spoiler = 0 WHERE CvePubli = idPost;
    ELSE
   UPDATE Publicaciones SET Spoiler = 1 WHERE CvePubli = idPost;
   END IF;
END //
DELIMITER ;


