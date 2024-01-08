const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const eeuuPerros = require("./eeuuPerros");
const eeuuGatos = require("./eeuuGatos");


module.exports = addKeyword(EVENTS.ACTION)
.addAction(async (_, { flowDynamic }) => {
        await flowDynamic('Tu mascota es un:\n\n *1.* Perro 🐶\n\n *2.* Gato 🐱');
        })
        .addAction({ capture: true }, async (ctx, { gotoFlow }) => {
          const opcion = parseInt(ctx.body);
          switch (opcion) {
            case 1: return gotoFlow(eeuuPerros);
            case 2: return gotoFlow(eeuuGatos);

          }
        },
        )