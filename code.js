//_Bienvenida_

// alert('¡Bienvenide al GatiQuiz! Si ganas la partida, tendrás una recompensa')
// alert('Completa los datos del formulario para iniciar el juego')


class Persona{
    constructor(persona){
        this.nombre = persona.nombrePersona;
        this.edad = persona.edadPersona;
        this.email = persona.emailPersona;

    }
}

function crearPersona(){
    let nombre = document.getElementById('name').value               
    let edad = document.getElementById('age').value
    let email = document.getElementById('email').value 

    const datos = {nombrePersona: nombre, emailPersona: email, edadPersona: edad};

    datosEnLS(datos)

    let datos_web = cargarDatosEnLS()
    const datosPersona = new Persona(datos_web);

}



function datosEnLS(datos){
    localStorage.setItem('datosPersona', JSON.stringify(datos))
}

function cargarDatosEnLS(){
    return JSON.parse(localStorage.getItem('datosPersona'))
}

document.getElementById('botonEnviar').addEventListener('click', crearPersona)







let gatiRespuestas = [4, 'blanco', 5];
let gatiPreguntas = ['¿Cuántas patas tiene un gato?', '¿De qué color son los bigotes de un gato?', '¿Cuántos dedos tiene un gato en sus patas delanteras?'];
let gatiIntentos = 3;
let gatiRespuestasCorrectas = 0;


//_Función respuesta incorrecta_

var acierto = false
const incorrecto = () => {
    return alert('No has acertado. ¡La próxima lo harás mejor!');
}


//_Función cuestionario_
const gatiQuiz = () => {
    for (let i = 0; i < gatiPreguntas.length; i++) {
        for (let j = 0; j < gatiIntentos; j++) {

            let respuestaUsuario = prompt(gatiPreguntas[i]);

            //USO DE OPERADOR TERNARIO

            let game = (respuestaUsuario == gatiRespuestas[i]) ?  (alert('¡Correcto!'), gatiRespuestasCorrectas++ , j = 3) :
                        (j === gatiIntentos - 1 && respuestaUsuario !== gatiRespuestas[i]) ? incorrecto() : ''
        
        }
    }
    alert(`Cantidad de preguntas acertadas: ${gatiRespuestasCorrectas} y cantidad de respuestas incorrectas: ${Math.abs(gatiRespuestasCorrectas - gatiPreguntas.length)}`)

    if(gatiRespuestasCorrectas >= 1){
        return recompensa()
    }
}



//_Recompensa_

const recompensa = () => {

    //_1 Imagenes de la recompensa_
    
    var arrayImagenes = ["ph1.jpg", "ph2.jpg", "ph3.jpg"]
    var imagenActual = 0
    
    //_2 Temporizador de imágenes_
    
    var temporizador
    temporizador = setInterval(cambiarImagen, 3000)
    
    //_3 Eventos de botones_
    
    
        document.getElementById("anterior").addEventListener("click", cambiarImagen)
        document.getElementById("siguiente").addEventListener("click", cambiarImagen)
        document.getElementById("imagen").addEventListener("mouseover", pararTemporizador)
        document.getElementById("imagen").addEventListener("mouseout", iniciarTemporizador)
        
        
            function cambiarImagen(){
                var boton = this.id;
                
                if(boton != undefined){
                    clearInterval(temporizador)
                    temporizador = setInterval(cambiarImagen, 3000)
                }
                if(boton == 'anterior'){
                    imagenActual --;
                    if(imagenActual < 0){
                        imagenActual == arrayImagenes.length - 1;
                    }
                } else {
                    imagenActual ++;
                    if(imagenActual == arrayImagenes.length){
                        imagenActual = 0
                    }
                }
                var imagenAMostrar = arrayImagenes [imagenActual];
                document.getElementById('imagen').src = "img/" + imagenAMostrar;
            }
        
            function pararTemporizador() {
                clearInterval(temporizador);
            }
            function iniciarTemporizador() {
                temporizador = setInterval(cambiarImagen, 3000);
            }
}

//DESESTRUCTURACIÓN DE ARRAYS 
    //Respuestas correctas

function rtaDOM(){
    let respuestasCorrectas = document.getElementById('respuestas');
    let [a, b, c] = gatiRespuestas
    
    respuestasCorrectas.innerHTML = `<h2>Las respuestas correctas son: <br>
                                      1° ${(a)} <br>
                                      2° ${(b)} <br>
                                      3° ${(c)} <br> `
}




gatiQuiz()

if(gatiQuiz){
    rtaDOM()
}


//USO DE SPREAD
const gato = {
    nombre: 'Gatín',
    raza: 'de la calle',
    pelo: 'blanco'
}

const gato2 = {...gato}
gato2.nombre = 'Terrible'
gato2.pelo = 'naranja'

const gatos = [gato, gato2]

console.log(gatos)











