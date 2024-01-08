require("dotenv").config();
const { createBot, createProvider, createFlow, addKeyword, EVENTS, } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')
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
const eeuu = require("./flows/eeuu");
const precios = require("./flows/precios");
const eeuuPerros = require("./flows/eeuuPerros");
const eeuuGatos = require("./flows/eeuuGatos");
const europa = require("./flows/europa");
const cotizacion = require("./flows/cotizacion");
const filtro = require("./flows/filtro");

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
      eeuu,
      precios,
      eeuuPerros,
      eeuuGatos,
      europa,
      cotizacion,
      filtro
          ];


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, agente, ...flows])
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
        inbox_id: 11,
      }
    }
    );

    QRPortalWeb()
}

main()