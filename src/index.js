const Alexa = require("ask-sdk-core");
const Request = require("request-promise");
const SSMLBuilder = require("ssml-builder");
const {parseString} = require("xml2js");

const ErrorHandler = {
    canHandle(input) {
        return true;
    },
    handle(input) {
        return input.responseBuilder
            .speak("Entschuldigung, das habe ich leider nicht verstanden")
            .reprompt("Entschuldigung, das habe ich leider nicht verstanden. Kannst du es wiederholen ?")
            .getResponse();
    }
}

const AboutHandler = {
    canHandle(input) {
        return input.requestEnvelope.request.type === "IntentRequest" && input.requestEnvelope.request.intent.name === "AboutIntent";
    },
    handle(input) {
        return input.responseBuilder
            .speak("Slick Dealer was created by Nic Raboy in Tracy, California")
            .withSimpleCard("About Slick Dealer", "Slick Dealer was created by Nic Raboy in Tracy, California")
            .getResponse();
    }
}

var skill;

exports.handler = async (event, context) => {
    if (!skill) {
        skill = Alexa.SkillBuilders.custom()
            .addRequestHandlers(
                // Handlers go here...
            )
            .addErrorHandlers(ErrorHandler)
            .create();
    }
    var response = await skill.invoke(event, context);
    return response;
};