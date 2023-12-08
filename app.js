const { createBot, createProvider, createFlow, addKeyword, EVENTS, } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')
const bienvenido = require('./flows/bienvenido')
const agente = require('./flows/agente')
const flowPrincipal = require('./flows/flowPrincipal')
const flowviajes = require('./flows/flowviajes')
const consulta = require('./flows/consulta')
const apoyo = require('./flows/apoyo')
const requisitos = require('./flows/requisitos')
const traslados = require('./flows/traslados')
const otros = require('./flows/otros')
const horario = require('./flows/horario')
const servicios = require('./flows/servicios')
const timeout = require('./flows/timeout')
const asesor = require('./flows/asesor')

    const flows = [
      flowPrincipal,
      flowviajes,
      consulta,
      apoyo,
      requisitos,
      traslados,
      otros,
      horario,
      servicios,
      timeout,
      asesor
    ];


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([bienvenido, agente, ...flows])
    const adapterProvider = createProvider(BaileysProvider)



    createBot(
      {
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    },
    {
      globalState: {
        status: true,
        inbox_id: 11, //id inbox Leifer-Ventas
      }
    }
    );

    QRPortalWeb()
}

main()
