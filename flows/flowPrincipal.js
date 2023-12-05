const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");
const flowviajes = require("./flowviajes");
const consulta = require("./consulta");
const otros = require("./otros");

module.exports = addKeyword('dsfsfsf')
  .addAction(async (_, { flowDynamic }) => {
    await flowDynamic('¡ Hola bienvenido a *MauroVet*\n\n Por favor escribe el número de la opción que deseas escoger:\n\n *1.* Consulta Veterinaria 👨‍⚕️\n\n *2.* Viajes de Mascotas ✈️\n\n *3.* Otras Consultas');
  },)
  .addAction({ capture: true }, async (ctx, { gotoFlow, fallBack }) => {
    const opcion = parseInt(ctx.body);
    switch (opcion) {
      case 1: return gotoFlow(consulta) ;
      case 2: return gotoFlow(flowviajes);
      case 3: return gotoFlow(otros);
      default: return fallBack();
      }
      },      
  );

