const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const vendedorFlow = require("./agente");
const flowPrincipal1 = require("./flowPrincipal");



module.exports = addKeyword(EVENTS.WELCOME)
    .addAction((_, { endFlow, globalState, gotoFlow }) => {

        const currentGlobalState = globalState.getMyState();
        // console.log(currentGlobalState);
        // console.log(globalState);
        if (currentGlobalState.status == true) {
            return gotoFlow(flowPrincipal1)
        }
        else {
            return endFlow();
        }
    })
    