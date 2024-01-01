
        window.onload = function() {
          // Verificar si el ancho de la pantalla es menor que cierto valor (puedes ajustar el valor según tus necesidades)
          if (window.innerWidth <= 600) {
            document.body.style.zoom = "70%";
          }
        }

        //Boton en moviles
        const boton = document.querySelector("#boton");
        const nav = document.querySelector("#nav");
        
        boton.addEventListener("click", () => {
            if (nav) {
                // Verifica si contiene la clase "no-visible"
                if (nav.classList.contains("no-visible")) {
                    // Si la clase está presente, la remueve
                    nav.classList.remove("no-visible");
                } else {
                    // Si la clase no está presente, la agrega
                    nav.classList.add("no-visible");
                }
            }
        });
        
        

        


