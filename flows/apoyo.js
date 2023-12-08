const { addKeyword } = require("@bot-whatsapp/bot");
const agente = require("./agente");

module.exports = addKeyword('apoyo')
.addAnswer(
    ['El certificado de apoyo es un documento expedido por un profesional en psicología dónde previa valoración y diagnóstico se certifica su mascota como apoyo emocional',
    '\n*(Este certificado no es exigido por ningún ente regulador para poder viajar con su mascota)*', 
    '\n El certificado tiene una vigencia de 12 meses',    
    '\nPodrás Usarlo en varias aerolíneas ya sean nacionales e internacionales incluyendo: Avianca, LATAM, Easy fly, Wingo',
    '(El certificado de apoyo no es valido para las aerolíneas Copa y Aeroméxico)',
    '\nEl servicio lo tramitamos de forma virtual, la cita psicológica se realiza por medio de video llamada',
    '- Inicialmente se agenda la cita de valoración',
    '- Se envía el test psicotécnico a su correo electrónico, el cual se responde en aproximadamente 30minutos',
    '- Posterior a la cita y con un resultado satisfactorio se expide el certificado las 24hs siguientes, firmado digitalmente y con copia de matrícula del profesional, el cual se envía a su correo electrónico.\n\n',
    '*COSTOS*',
    '1. Cita de valoración y test psicotécnico: $150.000 COP',
    '2. Certificado de Apoyo Emocional: $100.000 COP',
    '*TOTAL: $250.000 COP*',
        ]
)
.addAction(async (_, { flowDynamic }) => {
    await flowDynamic('Si desea agendar la cita o tiene alguna inquietud dejanos tu nombre completo y en cuanto estemos disponibles le atenderemos 😁🐾\n\n_Tambien puedes escribir el numero *0* para volver al menu principal ⬅️_', )
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