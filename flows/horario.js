const { addKeyword } = require("@bot-whatsapp/bot");

module.exports = addKeyword('requisitos')
.addAnswer(
    ['HORARIOS DE ATENCIÓN ⏰🧑‍⚕️\n\n*Lunes a Sabado*: 10:00 am -6:00pm \n\n *Domingos y Festivos*: 2:00 pm - 6:00pm\n\n'],
        null,
        null,
    )
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('_Escribe el numero *0* para volver al menú principal_', )
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