const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const {join} = require('path')
const delay = (ms) => new Promise((res) => setTimeout(res, ms));


    module.exports = addKeyword(EVENTS.ACTION)
    .addAnswer(
     "Te hemos agregado a un grupo con un asesor!\nDéjanos tus preguntas en el nuevo chat y en breve estaremos con usted\n\n *Gracias por Comunicarte con MauroVet😄🐾*"
    )
    .addAction(async (ctx, {provider, state}) => {
      const nanoid = await import('nanoid')
      const ID_GROUP = nanoid.nanoid(5)
      const refProvider = await provider.getInstance()
      // const country = state.get('country')
      const name = state.get('name')
      const mensaje = state.get('mensaje')
      const groupName = `MauroVet-${name} (${ID_GROUP})`;
      const id = `${ctx.from}@s.whatsapp.net`;
      const group = await refProvider.groupCreate(groupName, [id]);
      await provider.sendText(group.id, `${mensaje}`);

})
