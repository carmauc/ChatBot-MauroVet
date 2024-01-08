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


// const express = require("express");
// const { join } = require("path");
// const { createReadStream } = require("fs");
// const {
//   createBot,
//   createProvider,
//   createFlow,
//   addKeyword,
// } = require("@bot-whatsapp/bot");

// const BaileysProvider = require("@bot-whatsapp/provider/baileys");
// const MockAdapter = require("@bot-whatsapp/database/mock");

// const flowPrincipal = addKeyword("hi")

// .addAction(async (ctx, {provider, state, authState}) => {
//   try{
//   const id = `${ctx.from}@s.whatsapp.net`;
//   const nanoid = await import('nanoid')
//   const ID_GROUP = nanoid.nanoid(5)
//   const refProvider = await provider.getInstance()
//   // const name = state.get('name')
//   const groupName = `${ID_GROUP}`;
//   const g1 = await refProvider.groupCreate(groupName, [id]);
//   const messageObj = {
//     text: "Mensaje desde API"
//   };

//     await refProvider.sendMessage(groupName, messageObj);
//     console.log(provider);
//     console.log(`Grupo creado: ${groupName}`);
//     console.log(`ID del grupo: ${groupId}`);
//   } catch (error) {
//     console.error('Error al realizar la acción:', error);
//   }



// })



// const app = express();
// const main = async () => {
//   const adapterDB = new MockAdapter();
//   const adapterFlow = createFlow([flowPrincipal]);
//   const adapterProvider = createProvider(BaileysProvider);

//   createBot({
//     flow: adapterFlow,
//     provider: adapterProvider,
//     database: adapterDB,
//   });

//   /**
//    * Enviar mensaje con metodos propios del provider del bot
//    */
 
//   /**
//    * Enviar mensajes con metodos nativos del provider
//    */




//   app.get("/get-qr", async (_, res) => {
//     const YOUR_PATH_QR = join(process.cwd(), `bot.qr.png`);
//     const fileStream = createReadStream(YOUR_PATH_QR);

//     res.writeHead(200, { "Content-Type": "image/png" });
//     fileStream.pipe(res);
//   });

//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
// };

// main();