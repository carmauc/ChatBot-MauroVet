const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const requisitos = require("./requisitos");
const cotizacion = require("./cotizacion");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
      ['*Solo Realizamos traslados Internacionales* \n',
      '*En esta cotización no se incluye el costo de la documentación*\n'
      ],
          null,
          null,
      )
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('Invitamos consultar inicialmente los requisitos documentales de su país de destino antes de cotizar el traslado.\n\n*1.* Continuar ⏩\n\n*2.* Requisitos 📃', )
        })
              .addAction({ capture: true }, async (ctx, { gotoFlow }) => {
                const opcion = parseInt(ctx.body);
                          switch (opcion) {
                            case 1: return gotoFlow(cotizacion);
                            case 2: return gotoFlow(requisitos);
                            default: return gotoFlow(require("./traslados"));

                            }
            })