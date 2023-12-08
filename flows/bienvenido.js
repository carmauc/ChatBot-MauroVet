const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowPrincipal1 = require("./flowPrincipal");
const timeout = require("./timeout");


module.exports = addKeyword(EVENTS.WELCOME)
    .addAction(async(ctx, { endFlow, globalState, gotoFlow }) => {
        const currentGlobalState = globalState.getMyState();
        // console.log(currentGlobalState);
        // console.log(globalState);
        if (currentGlobalState.status == true ) {
            return gotoFlow(flowPrincipal1)
        }
        else
            {
                // return endFlow();
                setTimeout(function () {
                    console.log("Han pasado 24 horas. Encendiendo el Bot");
                    return gotoFlow(timeout)
                }, 24 * 60 * 60 * 1000); // 24 horas en milisegundos
            }
        }
    )

    