document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav__menu");
    const menuList = document.querySelector(".nav__list");
    const links = document.querySelectorAll(".nav__link");
  
    menu.addEventListener("click", function () {
      menuList.classList.toggle("nav__list--show");
    });
  
    // Adjunta un manejador de clic a cada enlace
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        // Oculta el menú al hacer clic en un enlace
        menuList.classList.remove("nav__list--show");
      });
    });
  });


  // Lista de URLs de imágenes que quieres mostrar
  var imagenes = ["/assets/dps3.jpeg","/assets/dp2.jpeg", "/assets/dp1.jpeg"];
  var indice = 0; // Índice actual de la imagen
  
  // Función para cargar una imagen en un elemento de imagen oculto
  function cargarImagen(src, callback) {
    var img = new Image();
    img.onload = function() {
      callback(img);
    };
    img.src = src;
  }
  
  // Función para cambiar la imagen
  function cambiarImagen() {
    cargarImagen(imagenes[indice], function(imagen) {
      var contenedor = document.getElementById("imagen");
      contenedor.innerHTML = ''; // Limpiar el contenedor
      contenedor.appendChild(imagen); // Agregar la nueva imagen
      indice = (indice + 1) % imagenes.length; // Avanzar al siguiente índice circularmente
    });
  }
  
  // Cambiar la imagen inicial
  cambiarImagen();
  
  // Configurar un temporizador para cambiar la imagen cada 3 segundos
  setInterval(cambiarImagen, 3000); // 3000 milisegundos = 3 segundos
  

  // Lista de URLs de imágenes que quieres mostrar
  var imagenesCurso = [
    "/assets/Fotos Curso/c1.jpeg",
    "/assets/Fotos Curso/c2.jpeg",
    "/assets/Fotos Curso/c5.jpeg",
    "/assets/Fotos Curso/cc3.jpeg",
    "/assets/Fotos Curso/cc8.jpeg"
  ];
  var indices = 0;
  
  // Función para cargar una imagen en un elemento de imagen oculto
  function cargarImagen(src, callback) {
    var img = new Image();
    img.onload = function () {
      callback(img);
    };
    img.src = src;
  }
  
  // Función para cambiar la imagen
  function cambiarImagen2() {
    cargarImagen(imagenesCurso[indices], function (imagen) {
      var contenedor = document.getElementById("curso");
      contenedor.innerHTML = ''; // Limpiar el contenedor
      contenedor.appendChild(imagen); // Agregar la nueva imagen
      indices = (indices + 1) % imagenesCurso.length;
    });
  }
  
  // Cambiar la imagen inicial
  cambiarImagen2();
  
  // Configurar un temporizador para cambiar la imagen cada 3 segundos
  setInterval(cambiarImagen2, 3000);
  

    // Lista de URLs de imágenes que quieres mostrar
    var imagenesMaquina = ["/assets/maquina/m1.jpeg",
    "/assets/maquina/m3.jpeg","/assets/maquina/m2.jpeg"];
    var indice = 0; // Índice actual de la imagen
    
    // Función para cargar una imagen en un elemento de imagen oculto
    function cargarImagen3(src, callback) {
      var img = new Image();
      img.onload = function() {
        callback(img);
      };
      img.src = src;
    }
    
    // Función para cambiar la imagen
    function cambiarImagen3() {
      cargarImagen(imagenesMaquina[indice], function(imagen) {
        var contenedor = document.getElementById("maquina");
        contenedor.innerHTML = ''; // Limpiar el contenedor
        contenedor.appendChild(imagen); // Agregar la nueva imagen
        indice = (indice + 1) % imagenesMaquina.length; // Avanzar al siguiente índice circularmente
      });
    }
    
    // Cambiar la imagen inicial
    cambiarImagen3();
    
    // Configurar un temporizador para cambiar la imagen cada 3 segundos
    setInterval(cambiarImagen3, 3000); // 3000 milisegundos = 3 segundos
    