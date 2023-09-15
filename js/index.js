
document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los enlaces de navegación
    const links = document.querySelectorAll("nav.menu a");

    // Obtener todas las secciones
    const sections = document.querySelectorAll("section");

    // Agregar un controlador de eventos de clic a cada enlace
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evitar la acción predeterminada de navegación

            // Obtener el ID de la sección a la que se va a navegar
            const targetId = link.getAttribute("href").substring(1);

            // Ocultar todas las secciones
            sections.forEach((section) => {
                section.style.display = "none"; // Oculta todas las secciones
            });

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = targetId === "inicio" ? "flex" : "block";
            }
        });
    });

    // Agregar un controlador de eventos de clic a los enlaces de Facebook e Instagram
    const facebookLink = document.querySelector(".fab.fa-facebook");
    const instagramLink = document.querySelector(".fab.fa-instagram");

    facebookLink.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar la acción predeterminada de navegación
        alert("Estás siendo redirigido a Facebook.");
    });

    instagramLink.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar la acción predeterminada de navegación
        alert("Estás siendo redirigido a Instagram.");
    });

    const recetaContainer = document.querySelector(".receta-lista");


    // URL de la API de SazonAPI para recetas
    const apiUrl = "https://sazonapi.hymsoft.repl.co/api/v1/recipies";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const recetas = data.data;

            if (recetas && recetas.length > 0) {
                recetas.slice(0, 3).forEach((receta) => {
                    const nombreReceta = receta.nombre;
                    const imagenReceta = receta.imagen;

                    // Crear un elemento div para la receta
                    const divReceta = document.createElement("div");
                    divReceta.classList.add("receta-item");

                    // Crear un elemento img para la imagen
                    const imgReceta = document.createElement("img");
                    imgReceta.src = imagenReceta;
                    imgReceta.alt = nombreReceta;

                    // Crear un elemento p para el nombre de la receta
                    const nombreRecetaElement = document.createElement("p");
                    nombreRecetaElement.textContent = nombreReceta;

                    // Agregar la imagen y el nombre al div de la receta
                    divReceta.appendChild(imgReceta);
                    divReceta.appendChild(nombreRecetaElement);

                    // Agregar el div de la receta al contenedor
                    recetaContainer.appendChild(divReceta);
                });
            } else {
                recetaContainer.textContent = "No se encontraron recetas.";
            }
        })
        .catch((error) => {
            console.error("Error al obtener datos de la API:", error);
            recetaContainer.textContent = "Error al cargar las recetas.";
        });

    const contactoForm = document.getElementById("contacto-form");

    contactoForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Obtén los valores de los campos del formulario
        const nombre = contactoForm.querySelector("#nombre").value;
        const correo = contactoForm.querySelector("#correo").value;
        const mensaje = contactoForm.querySelector("#mensaje").value;

        // Puedes hacer algo con estos valores, como enviarlos a un servidor o mostrarlos en la página
        console.log("Nombre:", nombre);
        console.log("Correo Electrónico:", correo);
        console.log("Mensaje:", mensaje);

        // Puedes agregar lógica adicional aquí, como enviar los datos a un servidor a través de una solicitud AJAX
        // o mostrar un mensaje de confirmación al usuario.

        // Limpia los campos del formulario después de enviar
        contactoForm.reset();
    });
});
