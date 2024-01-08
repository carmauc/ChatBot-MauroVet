const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const apoyo = require("./apoyo");
const traslados = require("./traslados");
const requisitos = require("./requisitos");
const filtro = require("./filtro");

module.exports = addKeyword(EVENTS.ACTION)
    .addAction(async (_, { flowDynamic }) => {
    await flowDynamic('¡ Por favor selecciona una opción 👇\n\n *1.* Requisitos y Documentación para viajes de Mascotas 📃\n\n *2.* Traslados 🛫\n\n *3.* Apoyo Emocional 🐕‍🦺\n\n *4.* Adquirir un servicio 👨‍💻\n\n *5.* Volver al Menú Principal ⬅️');
    })
    .addAction({ capture: true }, async (ctx, { fallBack, gotoFlow }) => {
      const opcion = parseInt(ctx.body);
      switch (opcion) {
        case 1: return gotoFlow(requisitos);
        case 2: return gotoFlow(traslados);
        case 3: return gotoFlow(apoyo);
        case 4: return gotoFlow(filtro);
        case 5: return gotoFlow(require("./flowPrincipal"));
        default: return fallBack();
      }
    },
    );