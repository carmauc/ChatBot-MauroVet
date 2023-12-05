const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const horario = require("./horario");
const agente = require("./agente");
const servicios = require("./servicios");


module.exports = addKeyword('otros')
      .addAction(async (_, { flowDynamic }) => {
      await flowDynamic('¡ Selecciona el número de la opción que deseas escoger:\n\n *1.* Horario de Atención ⏰\n\n *2.* Nuestros Servicios ✅\n\n *3.* Hablar con un Asesor 👨‍💻\n\n*4.* Volver al Menú Principal');
    })
    .addAction({ capture: true }, async (ctx, { gotoFlow, fallBack }) => {
          const opcion = parseInt(ctx.body);
          switch (opcion) {
            case 1: return gotoFlow(horario);
            case 2: return gotoFlow(servicios);
            case 3: return gotoFlow(agente);
            case 4: return gotoFlow(require("./flowPrincipal"));
            default: return fallBack();
      }
    },
    );