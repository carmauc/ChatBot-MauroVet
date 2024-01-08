const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const horario = require("./horario");
const servicios = require("./servicios");
const agente = require("./agente");
const filtro = require("./filtro");


module.exports = addKeyword(EVENTS.ACTION)
      .addAction(async (_, { flowDynamic }) => {
      await flowDynamic('¡ Selecciona el número de la opción que deseas escoger:\n\n *1.* Horario de Atención ⏰\n\n *2.* Nuestros Servicios ✅\n\n *3.* Hablar con un Asesor 👨‍💻\n\n *4.* Volver al Menú Principal ⬅️');
    })
    .addAction({ capture: true }, async (ctx, { gotoFlow, fallBack }) => {
          const opcion = parseInt(ctx.body);
          switch (opcion) {
            case 1: return gotoFlow(horario);
            case 2: return gotoFlow(servicios);
            case 3: return gotoFlow(filtro);
            case 4: return gotoFlow(require("./flowPrincipal"));
            default: return fallBack();
      }
    },
    );