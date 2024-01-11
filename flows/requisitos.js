const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");
const eeuu = require("./eeuu");
const europa = require("./europa");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    '¿Cual es tu Nombre Completo?',
    {
        capture: true,
    },
    async (ctx, { flowDynamic, state }) => {
        await state.update({ name: ctx.body })
        flowDynamic('Gracias por tu nombre!')
    }
)
.addAction(async (_, { flowDynamic }) => {
    await flowDynamic('¡ Cual es tu país de Destino 👇\n\n *1.* EEUU 🇺🇸\n\n *2.* Países de la Union Europea 🇪🇺\n\n *3.* Otro');
    })
    .addAction({ capture: true }, async (ctx, { gotoFlow, state }) => {
      const opcion = parseInt(ctx.body);
      switch (opcion) {
        case 1: 
        await state.update({ country:'EEUU'})
        return gotoFlow(eeuu);
        case 2: 
        await state.update({ country:'UE'})
        return gotoFlow(europa);
        case 3: 
        await state.update({ country:'Otro'})
        await state.update({ mensaje: 'Hola buen dia,\nPara asesoría sobre requisitos nacionales, internacionales y costos indícanos por favor:\n\n- Nombre Completo (Cliente)\n- Ciudad Origen\n- País de destino\n- Fecha estimada de viaje\n- Tipo de Mascota (perro o gato)\n- Edad de la Mascota\n\n En un momento estaré con usted'})
        return gotoFlow(agente);
      }
    },
    )
