const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const {join} = require('path')
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    module.exports = addKeyword(EVENTS.ACTION)
    .addAnswer(
     "Hemos creado un grupo con un asesor!👨‍💻"
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
      await flowDynamic(`*Presiona este link para ingresar al chat con el asesor* 👇:\n\nhttps://chat.whatsapp.com/${code}`);
      await refProvider.updateProfilePicture(grupo.id, {url:'./call.png'})
      await refProvider.groupUpdateDescription(grupo.id, `${country}`)
      // refProvider.sendMessage(group.id, { text: `${mensaje}` }) // say hello to everyone on the group
})
.addAnswer(
     "Recuerda que nuestro Horario de Atención ⏰ es de:\n\n*Lunes-Sábado*: 10:00am-6:00pm\n*Domingos*: 2:00pm-6:00pm"
    );

