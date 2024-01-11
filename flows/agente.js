const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const {join} = require('path')
const delay = (ms) => new Promise((res) => setTimeout(res, ms));


    module.exports = addKeyword(EVENTS.ACTION)
    .addAnswer(
     "Te hemos agregado a un grupo con un asesor!\nDéjanos tus preguntas en el nuevo chat y en breve estaremos con usted\n\n *Gracias por Comunicarte con MauroVet😄🐾*"
    )
    .addAction(async (ctx, {flowDynamic, provider, state}) => {
      const nanoid = await import('nanoid')
      const ID_GROUP = nanoid.nanoid(5)
      const refProvider = await provider.getInstance()
      // const country = state.get('country')
      const name = state.get('name')
      const mensaje = state.get('mensaje')
      const country = state.get('country')
      const groupName = `MauroVet-${name} (${ID_GROUP})`;
      const id = `${ctx.from}@s.whatsapp.net`;
      const grupo = await refProvider.groupCreate(groupName, [id]);
      const code = await refProvider.groupInviteCode(grupo.id)
      // console.log("group code: " + code)
      await flowDynamic(`Grupo con asesor:\n\nhttps://chat.whatsapp.com/${code}`);
      await refProvider.groupUpdateDescription(grupo.id, `${country}`)


      // refProvider.sendMessage(group.id, { text: `${mensaje}` }) // say hello to everyone on the group


      // const response = await sock.groupAcceptInviteV4(id, groupInviteMessage)
      // console.log("joined to: " + response)
//       const metadata = await refProvider.groupMetadata(group) 
// console.log(metadata.id + ", title: " + metadata.subject + ", description: " + metadata.desc)
// const response = await refProvider.groupParticipantsUpdate(, 
//   [id],
//   "add" // replace this parameter with "remove", "demote" or "promote"
// )


});
