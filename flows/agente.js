const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const {join} = require('path')

module.exports = addKeyword(EVENTS.ACTION)
    .addAction(async(_, { globalState }) => {
        const currentGlobalState = globalState.getMyState();
        if (currentGlobalState.status) {
            await globalState.update({status:false})
        }
        else{
            await globalState.update({status:true})
        }
    })
    .addAnswer(
        ["Te estamos contactando..."],
    )