const { addKeyword } = require("@bot-whatsapp/bot");
const agente = require("./agente");

module.exports = addKeyword('traslados')
.addAnswer(
    ['*En esta cotización no se incluye el costo de la documentación*\n',
          '*Solo Realizamos traslados Internacionales* \n\n',
          'Para cotizarle el traslado indicanos porfavor:\n\n', 
          '- Nombre Completo (Cliente)',    
          '- Ciudad y Pais de origen',
          '- Ciudad y País de destino',
          '- Nombre de la Mascota',
          '- Cantidad de Mascotas',
          '- Especie',
          '- Raza',
          '- Sexo',
          '- Edad',
          '- Peso',
          '- Talla (Pequeño, Mediano, Grande)',
          '- Medidas Alto (suelo a la cabeza)',
          '- Medias Largo (punta de nariz a la base de la cola)',
          '- Cuenta con serologia (Si o No)',
          '- Antecedentes médicos importantes',
        ],
        {media: 'https://i.imgur.com/ovHbq5J.jpg'},
        null,
    )


    
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('\nEs importante que envíes la información completa incluyendo las medidas de la mascota 😁\n\n _Tambien puedes escribir *0* para volver al menú principal_', )
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