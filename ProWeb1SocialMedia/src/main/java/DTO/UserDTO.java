
package DTO;


public class UserDTO {
    private int id;
    private String nombre;
    private String apellido;
    private String nickname;
    private String contrasena;
    private String fecha_nacimiento;
    private String imagen;
    private String correo_electronico;

    public UserDTO() {
    }

    public UserDTO(int id, String nombre, String apellido, String nickname, String contrasena, String fecha_nacimiento, String imagen, String correo_electronico) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nickname = nickname;
        this.contrasena = contrasena;
        this.fecha_nacimiento = fecha_nacimiento;
        this.imagen = imagen;
        this.correo_electronico = correo_electronico;
    }
    
    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getCorreo_electronico() {
        return correo_electronico;
    }

    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }
    
    
    
}

    

