var btn= document.getElementById("loginbutton");
var editicon= document.getElementsByClassName('edicon'); //aunque sea un solo elemento, editicon será array, por ende, si solo uso un elemento unico, poner ()[0]; o usar por ID


function alerta(){
    if(btn.innerText=="Login"){
    document.getElementById("loginbutton").innerHTML="Logout";  //se debe recorrer el array editicon para aplicar a cada elemento
        for(var i=0;i<editicon.length;i++){ //no funciona con for of , buscar por qué.
            editicon[i].style.display="inline";
        }
    }
    else{
        document.getElementById("loginbutton").innerHTML="Login";
        for(var i=0;i<editicon.length;i++){
            editicon[i].style.display="none";
        }
    }
    
}


//con la funcion de arriba, puedo hacer que cuando se toque el boton login, 
//el display de los botones de editar de cada seccion, 
//cambien su display, y luego hacer lo mismo con ellos, pero para la edicion de texto??
//Investigar como agregar imagenes, para tambien habilitar la inserción de las mismas
//Añadir opción para agregar un elemento nuevo a la sección donde se esté, generando un .container. 
//.row ya que trabajo con bootstrap
//y asi rellenar todo desde la UI