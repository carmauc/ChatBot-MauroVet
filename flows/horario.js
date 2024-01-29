const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    ['HORARIOS DE ATENCIÓN ⏰🧑‍⚕️\n\n*Lunes a Sábado*: 10:00 am -6:00pm \n\n *Domingos y Festivos*: 2:00 pm - 6:00pm\n\n'],
        null,
        null,
    )
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('_Escribe el numero *0* para volver al menú principal ⬅️_', )
        })
              .addAction({ capture: true }, async (ctx, { gotoFlow, fallback }) => {
                const opcion = parseInt(ctx.body);
                if (opcion == "0") {
                    return gotoFlow(require("./flowPrincipal"));
                }
                else {
                    return gotoFlow(require("./horario"));

                }
            })