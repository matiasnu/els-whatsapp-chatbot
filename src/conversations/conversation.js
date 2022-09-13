// import { buttons, remoteTxt, remoteJson, remoteImg } from "../helpers";
import { buttons } from "../helpers";

/**
 * Chatbot conversation flow
 * Your custom conversation
 */
export default [
  {
    id: 1,
    parent: 0,
    pattern: /.*/,
    /*pattern: /hola|buenas/,*/
    message: "¡Hola! Soy Elmo el bot de la recepción de els",
    description: "Contanos en que podemos ayudarte!",
    buttons: buttons([
      "Inscripciones",
      "Cobros",
      "Otros",
    ]),
  },
  {
    id: 2,
    parent: 1, // Relation with id: 1
    pattern: /inscripciones/,
    message: "Tenemos unas preguntas para vos!\n-Nombre y apellido del alumno.\n-Colegio, Grado/Año y turno\n-Horarios disponibles (por la tarde o por la mañana)",
    end: true,
  },
  {
    id: 3,
    parent: 1, // Relation with id: 1
    pattern: /cobros/,
    message: "Te pedimos que nos envies el comprobante de pago y nombre del alumno!\nMuchas gracias",
    end: true,
  },
  {
    id: 4,
    parent: 1, // Relation with id: 1
    pattern: /otros/,
    message: "Envianos tu inquietud y en instantes nos vamos a contactar con vos para ayudarte",
  },
  {
    id: 5,
    parent: 4, // Relation with id: 4
    pattern: /.*/, // Match with all text
    message: "Muchas gracias, tu mensaje lo recibimos correctamente! Bye Bye Chatbot 🤖 !",
    end: true,
  },
];