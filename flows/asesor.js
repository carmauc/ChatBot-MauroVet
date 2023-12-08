const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");


module.exports = addKeyword(EVENTS.ACTION)

.addAction(async (_, { flowDynamic }) => {
    await flowDynamic(['Buen día',
    'Déjanos tu nombre completo y el servicio que deseas adquirir y en cuanto estemos disponibles le atenderemos 😁🐾' ,
    '_Tambien puedes escribir el numero *0* para volver al menu principal ⬅️_'])
    })
    .addAction({ capture: true }, async (ctx, { gotoFlow }) => {
        const opcion = parseInt(ctx.body);
        if (opcion == "0") {
            return gotoFlow(require("./flowPrincipal"));
        }
        else {
            return gotoFlow(agente)
        }
    })