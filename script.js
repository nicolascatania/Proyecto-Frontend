var btn= document.getElementById("loginbutton");
function alerta(){
    alert("boton activo");
    if(btn.innerText=="Login"){
    document.getElementById("loginbutton").innerHTML="Logout";}
    else{
        document.getElementById("loginbutton").innerHTML="Login";
    }

}

//con la funcion de arriba, puedo hacer que cuando se toque el boton login, 
//el display de los botones de editar de cada seccion, 
//cambien su display, y luego hacer lo mismo con ellos, pero para la edicion de texto??
//Investigar como agregar imagenes, para tambien habilitar la inserción de las mismas
//Añadir opción para agregar un elemento nuevo a la sección donde se esté, generando un .container. 
//.row ya que trabajo con bootstrap
//y asi rellenar todo desde la UI