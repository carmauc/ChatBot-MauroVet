const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");


module.exports = addKeyword(EVENTS.ACTION)

.addAction(async (_, { flowDynamic }) => {
    await flowDynamic([
    'Indícanos por favor tu *Nombre*' ,
    '_También puedes escribir el numero *0* para volver al menu principal ⬅️_'])
    })
    .addAction({ capture: true }, async (ctx, { gotoFlow, state }) => {
        const opcion = parseInt(ctx.body);
        if (opcion == "0") {
            return gotoFlow(require("./flowPrincipal"));
        }
        else {
            await state.update({ name: ctx.body });
            await state.update({ country: 'Consulta Veterinaria'});
            await state.update({ mensaje: 'Hola, en que podemos ayudarle?\n\n _Recuerda que para atención a domicilio debes informarnos para donde sería el servicio, para verificar costos, disponibilidad y cobertura_\n\n*(incluye barrio y/o ubicación de Google) 📌🗺️*'});
            return gotoFlow(agente)            
        }
    })