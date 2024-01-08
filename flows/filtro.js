const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");

module.exports = addKeyword("Asesor", { sensitive: true })
.addAnswer(
    '¿Cual es tu Nombre?',
    {
        capture: true,
    },
    async (ctx, { gotoFlow, flowDynamic, state }) => {
        await state.update({ mensaje: 'Hola, en que podemos ayudarle?'});
        await state.update({ name: ctx.body })
        flowDynamic('Gracias por tu nombre!')
        return gotoFlow(agente)
    }
)