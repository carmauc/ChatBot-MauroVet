const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const agente = require("./agente");
const flowPrincipal = require("./flowPrincipal");


module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(
    [ '*PRECIOS: 2024*\n\n',
     '🔹 Microchip ISO-FDX 15 dígitos + Anestesia Local: *$ 130.000 COP*\n',
     '🔹 Vacuna Triple Felina o Pentavalente = *$45.000 COP*\n',
     '🔹 Vacuna Rabia: *$30.000 COP*\n',
     '🔹 Desparasitación Interna: *$30.000 COP*\n',
     '🔹 Desparasitación Externa: *$55.000 COP*\n',
     '🔹 Certificado de anticuerpos de rabia (incluye envío de muestra y seguimiento) : *$ 1.430.000 COP*',
     '_Recolección y envío de muestra desde Cali o Bogota: $90.000 adicional_\n',
     '🔹 Certificado de Salud Internacional (emitido por un veterinario registrado ante el ICA en ingles y español): *$150.000 COP*\n',
     '_El certificado de salud para Brasil o Argentina tiene un costo de $180.000 COP_\n',
     '🔹 Certificado Adicional (Anexo IV para Europa, Certificado de Rabia para USA, Anexo para Reino Unido o Israel): *$120.000 COP*\n',
     '🔹 Solicitud de Permiso en el CDC (solo aplica para viajes a EEUU): *$95.000 COP*\n\n',
     '🔸  OPCIONAL:',
     'Certificado de apoyo emocional (Incluye valoración psicológica, test psicotécnico y expedición): *$250.000 COP*.',
     '_No aplica para AeroMexico-Copa_\n\n',
     '_*El costo del domicilio para aplicación de vacunas o implantación de microchip puede variar dependiendo la localidad*_'
    ]
    )
    .addAnswer(
      'Esperamos haberle ayudado, si tiene alguna inquietud adicional o deseas adquirir un servicio puedes escribir la palabra "*asesor*" en cualquier momento y en breve estaremos con usted.\n\nLe deseamos un excelente día 🐱🐶',
        );
