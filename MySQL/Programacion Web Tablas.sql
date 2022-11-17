CREATE DATABASE IF NOT EXISTS MeetingPoint;
USE MeetingPoint;

DROP TABLE IF EXISTS Usuarios;
CREATE TABLE Usuarios (
	CveUsuario			INT NOT NULL AUTO_INCREMENT,
    Nombre				VARCHAR(50) NOT NULL,
    Apellidos			VARCHAR(50) NOT NULL,
    FechaNacimiento 	DATE NOT NULL,
    Correo				VARCHAR(100) NOT NULL,
    ImagenPerfil		MEDIUMBLOB NOT NULL,
    NombreUsuario		VARCHAR(50) NOT NULL,
    Contra				VARCHAR(30) NOT NULL,
	FechaCreacion		DATE NOT NULL,
    
    CONSTRAINT PK_USUARIOS
    PRIMARY KEY (CveUsuario)
);

DROP TABLE IF EXISTS Publicaciones;
CREATE TABLE Publicaciones(
	CvePubli		INT NOT NULL AUTO_INCREMENT,
    Texto			VARCHAR(280),
    Imagen			MEDIUMBLOB,
    Spoiler			BIT DEFAULT 1 NOT NULL,
    FechaCreacion	DATETIME NOT NULL,
	IdUsuario 		INT NOT NULL,
    Activo		    BIT DEFAULT 1 NOT NULL,
    
    CONSTRAINT PK_PUBLICACIONES
    PRIMARY KEY (CvePubli),
    
    CONSTRAINT FK_PUBLI_USUARIO
    FOREIGN KEY (IdUsuario) 
    REFERENCES Usuarios(CveUsuario)
);

DROP TABLE IF EXISTS Comentarios;
CREATE TABLE Comentarios(
    CveComentario	INT	NOT NULL AUTO_INCREMENT,
    Texto			VARCHAR(280) NOT NULL,
	Spoiler			BIT DEFAULT 1 NOT NULL,
    Activo			BIT DEFAULT 1 NOT NULL,
    FechaCreacion	DATETIME NOT NULL,
    IdUsuario INT NOT NULL,
    IdPublicacion INT NOT NULL,
    
	CONSTRAINT PK_COMENTARIOS
    PRIMARY KEY (CveComentario),
    
    CONSTRAINT FK_COMENTARIO_USUARIO
    FOREIGN KEY (IdUsuario) 
    REFERENCES Usuarios(CveUsuario),
    
    CONSTRAINT FK_COMENTARIO_PUBLICACION
    FOREIGN KEY (IdPublicacion) 
    REFERENCES Publicaciones(CvePubli)
);

DROP TABLE IF EXISTS Likes;
CREATE TABLE Likes(
	CveLike			INT	NOT NULL AUTO_INCREMENT,
    IdPubli			INT	NOT NULL,
    IdUsuario		INT	NOT NULL,
    
    CONSTRAINT PK_LIKES
    PRIMARY KEY (CveLike),
    
    CONSTRAINT FK_LIKE_PUBLICACION
    FOREIGN KEY (IdPubli) 
    REFERENCES Publicaciones(CvePubli),
    
    CONSTRAINT FK_LIKE_USUARIO
    FOREIGN KEY (IdUsuario) 
    REFERENCES Usuarios(CveUsuario)
);