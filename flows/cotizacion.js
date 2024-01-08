const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    '¿Cual es tu Nombre?',
    {
        capture: true,
    },
    async (ctx, { flowDynamic, state }) => {
        await state.update({ name: ctx.body })
        flowDynamic('Gracias por tu nombre!')
    })

.addAnswer(
    [
          'Para cotizar el traslado de la mascota debes tener los siguientes datos:\n\n', 
          '🔹 Nombre Completo (Cliente)',    
          '🔹 Ciudad y País de origen',
          '🔹 Ciudad y País de destino',
          '🔹 Nombre de la Mascota',
          '🔹 Cantidad de Mascotas',
          '🔹 Especie',
          '🔹 Raza',
          '🔹 Sexo',
          '🔹 Edad',
          '🔹 Peso',
          '🔹 Talla (Pequeño, Mediano, Grande)',
          '🔹 Medidas Alto (suelo a la cabeza)',
          '🔹 Medias Largo (punta de nariz a la base de la cola)',
          '🔹 Cuenta con serologia (Si o No)',
          '🔹 Antecedentes médicos importantes\n\n\n',
          '*Es importante que envíes la información completa al chat con nuestro asesor en cuanto estemos disponibles le atenderemos 😁🐾*'
        ],
        {media: 'https://i.imgur.com/ovHbq5J.jpg'},
        null,
    )
            .addAction(async (_, { flowDynamic }) => {
                await flowDynamic('*1.* Continuar con asesor ⏩\n\n*2.* Volver al menu principal ⬅️', )
                })
                      .addAction({ capture: true }, async (ctx, { gotoFlow, state}) => {
                        const opcion = parseInt(ctx.body);
                  switch (opcion) {
                    case 1: 
                    await state.update({ mensaje: 'Buena dia, en un momento estaré con usted. Recuerda compartirnos los datos para el traslado por este chat.'});
                    return gotoFlow(agente);
                    case 2: return gotoFlow(require("./flowPrincipal"));
        }
                    })