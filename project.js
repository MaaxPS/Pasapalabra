let corrIncorr=document.querySelector(".corr-incorr")
let palabraActual=document.querySelector(".palabra-actual")
let time=document.querySelector(".time")
let puntos=document.querySelector(".puntos")
let letters=document.querySelectorAll(".letter")
let miniCaja=document.querySelector(".mini-caja")
let pregunta=document.querySelector(".pregunta")
let start=document.getElementById("start")
let palabra=document.getElementById("palabra")
let form=document.querySelector("form")
let pasapalabra=false,todosLosJugadores=[],contadorPartidas=0
const questions = [
    {
      letter: "a",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
          answer:'abducir'
        },
        {
          question:"CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha",
          answer:'alcachofa'
        },
        {
          question:"CON LA A. Planta con raíz comestible, de color blanco y olor fuerte",
          answer:'ajo'
        }
      ],
    },
    {
      letter: "b",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
          answer: "bingo",
        },
        {
          question:"CON LA B. Caja en la que se guardan medicinas.",
          answer:'botiquin'
        },
        {
          question:"CON LA B. Palo de madera que sirve para apoyarse al andar.",
          answer:'baston'
        }
      ],
    },
    {
      letter: "c",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA C. Niño, crío, bebé",
          answer:'churumbel'
        },
        {
          question:"CON LA C.Planta verde con muchas espinas",
          answer:'cactus'
        },
        {
          question:"CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos.",
          answer:'camilla'
        }
      ],
    },
    {
      letter: "d",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA D. Palabras que se escriben y se dicen como regalo a alguien.",
          answer:'dedicatoria'
        },
        {
          question:"CON LA D. Anormalidad en la función del aparato digestivo",
          answer:'diarrea'
        },
        {
          question:"CON LA D. Moverse al ritmo de una música",
          answer:'danzar'
        }
      ],
    },
    {
      letter: "e",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA E. Objeto con forma de cono que se utiliza para pasar líquidos de un recipiente a otro.",
          answer:'embudo'
        },
        {
          question:"CON LA E. Mancharse un cristal con el vapor de agua",
          answer:'empañar'
        },
        {
          question:"CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
          answer:'ectoplasma'
        }
      ],
    },
    {
      letter: "f",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA F. Moderar o parar el movimiento de algo",
          answer:'frenar'
        },
        {
          question:"CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
          answer:'facil'
        },
        {
          question:"CON LA F. Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos.",
          answer:'fiebre'
        }
      ],
    },
    {
      letter: "g",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
          answer:'galaxia'
        },
        {
          question:"CON LA G. Especie de pelota de goma, que se hincha con aire",
          answer:'globo'
        },
        {
          question:"CON LA G. Pluralidad de seres o cosas que forman un conjunto",
          answer:'grupo'
        }
      ],
    },
    {
      letter: "h",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA H. Suicidio ritual japonés por desentrañamiento",
          answer:'harakiri'
        },
        {
          question:"CON LA H. Interrupción colectiva de la actividad laboral por parte de los trabajadores",
          answer:'huelga'
        },
        {
          question:"CON LA H. Lo que sale cuando se hace un fuego.",
          answer:'humo'
        }
      ],
    },
    {
      letter: "i",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA I. Lugar en el que se hacen las misas, las bodas, los bautizos, las comuniones,...",
          answer:'iglesia'
        },
        {
          question:"CON LA I. Templo cristiano",
          answer:'iglesia'
        },
        {
          question:"CON LA I. Irritar, enfadar vehementemente a alguien",
          answer:'indignar'
        }
      ],
    },
    {
      letter: "j",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
          answer:'jabali'
        },
        {
          question:"CON LA J. Persona que ha dejado de trabajar y percibe una pensión",
          answer:'jubilado'
        },
        {
          question:"CON LA J. Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles...",
          answer:'jardin'
        }
      ],
    },
    {
      letter: "l",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA L. Hacer que alguien o algo quede libre, eximir a alguien de una obligación",
          answer:'liberar'
        },
        {
          question:"CON LA L. Satélite de la Tierra, de color blanco, que se ve por la noche.",
          answer:'luna'
        },
        {
          question:"CON LA L. Hombre lobo",
          answer:'licantropo'
        }
      ],
    },
    {
      letter: "m",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA M. Tela que se pone en las mesas a la hora de comer.",
          answer:'mantel'
        },
        {
          question:"CON LA M. Reunión pública, generalmente al aire libre, en la que los asistentes reclaman algo",
          answer:'manifestacion'
        },
        {
          question:"CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
          answer:'misantropo'
        }
      ],
    },
    {
      letter: "n",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA N. Estado propio de la persona nacida o naturalizada en una nación",
          answer:'nacionalidad'
        },
        {
          question:"CON LA N. Tipo de casa que construyen los pájaros para poner sus huevos.",
          answer:'nido'
        },
        {
          question:"CON LA N. Demostración de poca inteligencia",
          answer:'necedad'
        }
      ],
    },
    {
      letter: "ñ",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA Ñ. Mamífero africano de color marrón parecido a un toro con los cuernos curvos.",
          answer:'ñu'
        },
        {
          question:"CON LA Ñ.  Representarse en la fantasía imágenes o sucesos mientras se duerme",
          answer:'soñar'
        },
        {
          question:"CON LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
          answer:'señal'
        }
      ],
    },
    {
      letter: "o",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA O. Asociación de personas regulada por un conjunto de normas en función de determinados fines",
          answer:'organizacion'
        },
        {
          question:"CON LA O. Órgano del sentido de la vista. Lo que usamos para ver.",
          answer:'ojo'
        },
        {
          question:"CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
          answer:'orco'
        }
      ],
    },
    {
      letter: "p",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA P. Animales que viven en el agua, cubiertos de escamas, con aletas para nadar.",
          answer:'peces'
        },
        {
          question:"CON LA P. Iniciar o impulsar una idea o proyecto procurando su logro ",
          answer:'promover'
        },
        {
          question:"CON LA P. Raza ancestral tecnológicamente avanzada",
          answer:'protoss'
        }
      ],
    },
    {
      letter: "q",
      status: 0,
      questionsLetter: [

        {
          question:"CONTIENE LA Q. Cometer delito",
          answer:'delinquir'
        },
        {
          question:"CON LA Q. Alimento de color amarillento que se fabrica con leche, y que se come en trozos, lonchas...",
          answer:'queso'
        },
        {
          question:"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
          answer:'queso'
        }
      ],
    },
    {
      letter: "r",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA R. Veloz.",
          answer:'rapido'
        },
        {
          question:"CON LA R. Someter material usado a un proceso para que se pueda volver a utilizar",
          answer:'reciclar'
        },
        {
          question:" CON LA R. Roedor",
          answer:'raton'
        }
      ],
    },
    {
      letter: "s",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA S. Hacer cesar, hacer desaparecer, anular",
          answer:'suprimir'
        },
        {
          question:"CON LA S. Lo que usas para que tus lápices tengan la punta afilada.",
          answer:'sacapuntas'
        },
        {
          question:"CON LA S. Comunidad salvadora de todo desarrollador informático",
          answer:'stackoverflow'
        }
      ],
    },
    {
      letter: "t",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA T. Objeto que se usa para pinchar los alimentos y comérselos.",
          answer:'tenedor'
        },
        {
          question:"CON LA T. Tributo que se impone a la utilización de ciertos servicios, o al ejercicio de ciertas actividades",
          answer:'tasa'
        },
        {
          question:"CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
          answer:'terminator'
        }
      ],
    },
    {
      letter: "u",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA U. Necesidad o falta apremiante, inmediata obligación de hacer algo.",
          answer:'urgencia'
        },
        {
          question:"CON LA U. Parte dura que está en la punta de los dedos, que cortamos cuando crece",
          answer:'uña'
        },
        {
          question:"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
          answer:'unamuno'
        }
      ],
    },
    {
      letter: "v",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA V. Estación del año en la que hace mucho calor.",
          answer:'verano'
        },
        {
          question:"CON LA V. Aparato que gira y que sirve para dar aire.",
          answer:'ventilador'
        },
        {
          question:"CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia",
          answer:'vikingos'
        }
      ],
    },
    {
      letter: "x",
      status: 0,
      questionsLetter: [

        {
          question:"CONTIENE LA X. Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos.",
          answer:'taxi'
        },
        {
          question:"CONTIENE LA X. Persona de otro país.",
          answer:'extranjero'
        },
        {
          question:"CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
          answer:'botox'
        }
      ],
    },
    {
      letter: "y",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA Y. Parte amarilla del huevo.",
          answer:'yema'
        },
        {
          question:"CON LA Y. Hembra del caballo.",
          answer:'yegua'
        },
        {
          question:"CON LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual",
          answer:'peyote'
        }
      ],
    },
    {
      letter: "z",
      status: 0,
      questionsLetter: [

        {
          question:"CON LA Z. Que tiene más habilidad con la mano izquierda que con la derecha.",
          answer:'zurdo'
        },
        {
          question:"CON LA Z. Planta que tiene una raíz comestible alargada de color anaranjado, y que les gusta mucho a los conejos.",
          answer:'zanahoria'
        },
        {
          question:"CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
          answer:'zen'
        }
      ],
    },

];

let getRandomNumber=()=>{
    return Math.floor(Math.random()*3)
}

let cambiarColorLetra=(respuesta)=>{
    if(respuesta){
        for(let i=0;i<letters.length;i++){
            if(letters[i].textContent==miniCaja.textContent){
                letters[i].style.backgroundColor='rgb(8, 255, 13)'
            }
        }
    }
    else{
        for(let i=0;i<letters.length;i++){
            if(letters[i].textContent==miniCaja.textContent){
                letters[i].style.backgroundColor='red'
            }
        }
    }
}

let contadorFuncion=0,tiempoActivo
let alternarFuncion=()=>{
    if(contadorFuncion==0){
        startGame()
        contadorFuncion=1
    }
    else if(contadorFuncion==1){
        stopGame()
        contadorFuncion=2
    }
    else if(contadorFuncion==2){
        continueGame()
        contadorFuncion=1
    }
}

let cogerNombreUsuario=()=>{
    pregunta.textContent="Introduce tu nombre de usuario:"
    miniCaja.innerHTML="&nbsp;"
    palabra.value=""
}



let contadorFuncion2=1,partidaAcabada=false
let alternarFuncion2=()=>{
    if(contadorFuncion2==0){
        answerQuestion()
        if(partidaAcabada){
            numeroLetraActual=[0],randomNumbers=[getRandomNumber()],otraVuelta=false,noMasRandom=false,partidaAcabada=false,contadorFuncion2=1
        }
    }
    else if(contadorFuncion2==1){
        start.textContent="Stop"
        tiempoActivo=setInterval(()=>{
            time.textContent=Number(time.textContent)-1
        },1000)
        showQuestion(numeroLetraActual,randomNumbers)
        contadorFuncion2=0
        todosLosJugadores.push(palabra.value)
        palabraActual.textContent="Player"
            palabraActual.style.display="block"
            corrIncorr.style.fontSize="large"
            corrIncorr.textContent="Buena suerte!"
            palabra.value=""
    }
}

let numeroLetraActual=[0],randomNumbers=[getRandomNumber()],otraVuelta=false,noMasRandom=false
let answerQuestion=()=>{
    if(!pasapalabra){
        if(palabra.value==questions[numeroLetraActual[0]].questionsLetter[randomNumbers[numeroLetraActual[0]]].answer){
            corrIncorr.textContent="Correcto!"
            palabraActual.textContent=questions[numeroLetraActual[0]].questionsLetter[randomNumbers[numeroLetraActual[0]]].answer.charAt(0).toUpperCase() + questions[numeroLetraActual[0]].questionsLetter[randomNumbers[numeroLetraActual[0]]].answer.slice(1);
            puntos.textContent=Number(puntos.textContent)+1
            cambiarColorLetra(true)
        }
        else{
            corrIncorr.textContent="Incorrecto!"
            palabraActual.textContent=questions[numeroLetraActual[0]].questionsLetter[randomNumbers[numeroLetraActual[0]]].answer.charAt(0).toUpperCase() + questions[numeroLetraActual[0]].questionsLetter[randomNumbers[numeroLetraActual[0]]].answer.slice(1);    
            cambiarColorLetra(false)
        }
        questions[numeroLetraActual[0]].status=1
    }else{
        pasapalabra=false
    }
    if(!otraVuelta){
        numeroLetraActual[0]++
        if(numeroLetraActual[0]==25){
            numeroLetraActual[0]=0
            noMasRandom=true
        }
        if(!noMasRandom){
            randomNumbers.push(getRandomNumber())
        }
    while(questions[numeroLetraActual[0]].status==1){
        numeroLetraActual[0]++
        if(questions.every(question=>question.status==1)||time.textContent=="0"){
            palabra.value="" 
            partidaAcabada=true
            miniCaja.innerHTML="&nbsp;"
            pregunta.textContent="Has acertado "+puntos.textContent+" preguntas! Pulsa Start para jugar otra partida"
            corrIncorr.textContent="Buena partida!"
            palabraActual.textContent="Pasapalabra"
            start.textContent="Start"
            todosLosJugadores.push(puntos.textContent)
            contadorPartidas++
            puntos.textContent="0"
            time.textContent="300"
            clearInterval(tiempoActivo)
            palabraActual.textContent=""
            palabraActual.style.display="none"
            corrIncorr.style.fontSize="16px"
            contadorFuncion=0
            for(let i=0;i<letters.length;i++){
                letters[i].style.backgroundColor="blue"
            }
            corrIncorr.textContent="Ranking:"
            for(let i=0;i<todosLosJugadores.length;i+=2){
                corrIncorr.textContent+=" "+todosLosJugadores[i]+" - "+todosLosJugadores[i+1]+" / "
            }
            for(let i=0;i<questions.length;i++){
                questions[i].status=0
            }
            return
        }
    }
    showQuestion(numeroLetraActual,randomNumbers)
    palabra.value=""
}
}

let showQuestion=(numeroLetraActual,randomNumbers)=>{
    miniCaja.textContent=questions[numeroLetraActual[0]].letter.toUpperCase()
    pregunta.textContent=questions[numeroLetraActual[0]].questionsLetter[randomNumbers[numeroLetraActual[0]]].question
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
})
palabra.addEventListener("submit",answerQuestion)

let startGame=()=>{
    cogerNombreUsuario()
}

let stopGame=()=>{
    start.textContent="Continue"
    clearInterval(tiempoActivo)
}

let continueGame=()=>{
    start.textContent="Stop"
    tiempoActivo=setInterval(()=>{
        time.textContent=Number(time.textContent)-1
    },1000)
}
