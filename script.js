const consultarDatos = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";  
    fetch(url)
        .then((respuesta) => {
            if (!respuesta.ok) { // Verifica si la respuesta fue exitosa 
                throw new Error(`Error en la solicitud: ${respuesta.status}`);
            }
            return respuesta.json(); // Convierte la respuesta a JSON
        })
        .then((datos) => {
            mostrarDatos(datos); // Pasa el JSON al método mostrarDatos
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error); // Maneja el error si ocurre
        });
}; 

function mostrarDatos(datos) {
    const primerosDatos = datos.slice(0, 20); // Toma los primeros 20 elementos devueltos
    primerosDatos.forEach((elemento) => {
        console.log(`ID: ${elemento.id}, Título: ${elemento.title}`);
    });
}
consultarDatos();
//-------------------------------------------------------------------------------------------------------
//funcion que tarda 3 segundos 
function enviarInformacion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada"); // Resuelve la promesa con el mensaje después de 3 segundos
        }, 3000); // 3000 milisegundos = 3 segundos
    });
}
// Función asíncrona que utiliza await para recibir el mensaje
async function mostrarMensaje() {
    const mensaje = await enviarInformacion(); // Espera a que la promesa se resuelva
    console.log(mensaje); // Muestra el mensaje en la consola
}
// Llamada a la función asíncrona
mostrarMensaje();

/**
 * NOTA:
 * 
 * SLICE: en JavaScript se utiliza para crear una nueva matriz que contiene una copia 
 *        superficial de una parte de la matriz original, sin modificarla. 
 *        Toma dos argumentos: el índice de inicio y el índice de final.
 * 
 * 
 */