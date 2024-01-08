const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const precios = require("./precios");
const agente = require("./agente");
const filtro = require("./filtro");


module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    ['*Lo invitamos a verificar la información con la aerolínea y los requisitos estatales los cuales pueden consultarse en el siguiente link:*\n',
    'https://www.aphis.usda.gov/aphis/pet-travel/bring-pet-into-the-united-states/pet-travel-cats-into-us.\n\n',
    'Para mayor información consultar en:\n',
    'https://www.cdc.gov/importation/bringing-an-animal-into-the-united-states/cats.html\n',
    'https://www.ica.gov.co/importacion-y-exportacion/otros-procedimientos/requisitos-para-importar-mascotas' ],
        {media: 'https://res.cloudinary.com/dmurguugh/image/upload/v1704666405/REQUISITOS%20VIAJE/Requisitos-Exportacion-Gatos-EEUU_n0rwxq.jpg'},
        null,
    )

.addAction(async (_, { flowDynamic }) => {
        await flowDynamic('Selecciona una opción:\n\n *1.* Precios 💵\n\n *2.* Hablar con un Asesor 👨‍💻\n\n *3.* Volver al Menú Principal ⬅️');
        })
        .addAction({ capture: true }, async (ctx, { gotoFlow }) => {
          const opcion = parseInt(ctx.body);
          switch (opcion) {
            case 1: return gotoFlow(precios);
            case 2: 
            await state.update({ mensaje: 'Hola, en que podemos ayudarle?'});
            return gotoFlow(agente);
            case 3: return gotoFlow(require("./flowPrincipal"));
          }
        },
        )