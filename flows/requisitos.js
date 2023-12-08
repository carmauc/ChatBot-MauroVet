const { addKeyword } = require("@bot-whatsapp/bot");
const agente = require("./agente");

module.exports = addKeyword('requisitos')
.addAnswer(
    ['Para asesoría sobre requisitos nacionales, internacionales y costos indícanos por favor:\n\n', 
    '- Nombre Completo (Cliente)',    
    '- Ciudad Origen',
    '- Tipo de Viaje (Internacional o Nacional)',
    '- País de destino ',
    '- Fecha estimada de viaje',
    '- Cantidad de Mascotas',
    '- Tipo de Mascota (perro o gato)',
    '- Edad de la Mascota',
        ],
        null,
        null,
    )
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('*Es importante que envíes la información completa en cuanto estemos disponibles le atenderemos 😁🐾*\n\n_Tambien puedes escribir el numero *0* para volver al menu principal ⬅️_', )
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