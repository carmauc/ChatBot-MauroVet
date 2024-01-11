const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const precios = require("./precios");
const agente = require("./agente");


module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    ['Para mayor información consultar en:\n',
    'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en\n',
    'https://www.ica.gov.co/importacion-y-exportacion/otros-procedimientos/requisitos-para-importar-mascotas' ],
        {media: 'https://res.cloudinary.com/dmurguugh/image/upload/v1704667402/REQUISITOS%20VIAJE/RequisitosUnionEuropea_omxigq.jpg'},
        null,
    )

.addAction(async (_, { flowDynamic }) => {
        await flowDynamic('Selecciona una opción:\n\n *1.* Precios 💵\n\n *2.* Hablar con un Asesor 👨‍💻\n\n *3.* Volver al Menú Principal ⬅️');
        })
        .addAction({ capture: true }, async (ctx, { gotoFlow, state }) => {
          const opcion = parseInt(ctx.body);
          switch (opcion) {
            case 1: 
            await state.update({ country: 'UE'});
            return gotoFlow(precios);
            case 2: 
            await state.update({ country: 'Asesoría Viajes'});
            await state.update({ mensaje: 'Hola, en que podemos ayudarle?'});
            return gotoFlow(agente);
            case 3: return gotoFlow(require("./flowPrincipal"));
          }
        },
        )