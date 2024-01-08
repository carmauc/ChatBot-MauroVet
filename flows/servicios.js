const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    ['🔹Nuestros servicios puedes consultarlos en: \n https://maurovet.com/servicios/ \n',
    '🔹Para testimonios y preguntas frecuentes sobre viajes de tu mascota visita: \nhttps://maurovet.com/viajes-mascotas/\n\n 🔹Instagram:\n https://instagram.com/mauro.vet\n\n'],
        null,
        null,
    )
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('_Escribe el numero *0* para volver al menu principal ⬅️_', )
        })
              .addAction({ capture: true }, async (ctx, { gotoFlow, fallback }) => {
                const opcion = parseInt(ctx.body);
                if (opcion == "0") {
                    return gotoFlow(require("./flowPrincipal"));
                }
                else {
                    return fallback()
                }
            })