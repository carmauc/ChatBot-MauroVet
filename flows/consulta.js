const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");


module.exports = addKeyword(EVENTS.ACTION)

.addAction(async (_, { flowDynamic }) => {
    await flowDynamic(['Buen día',
    'Para consultas a domicilio cuéntanos para donde sería el servicio, para verificar costos, disponibilidad y cobertura \n *(incluye barrio y/o ubicación de Google) 📌🗺️* \n\n Si ya eres cliente nuestro puedes dejarnos tu nombre completo y en un momento le atenderemos 🐾' ,
    '\n\n_Tambien puedes escribir el numero *0* para volver al menu principal_'])
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