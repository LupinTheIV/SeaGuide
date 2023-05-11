var TeleSignSDK = require('telesignsdk');

const customerId = "4DD4AEB0-39D1-40A4-8D83-297231474A6B";
const apiKey = "N5/FNrEPHz7RUnVSDshkssVkDuce2CfsBIzLyVN/+s7nZWpFsB/nboan1Ecl4YpZUbhy0tJjOFYcjzP+Y0eSZQ==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
apiKey,
rest_endpoint,
timeout // optional
// userAgent
);

const phoneNumber = "573107576990";
const message = "Prueba";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
if (error === null) {
console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
    ` => code: ${responseBody["status"]["code"]}` +
    `, description: ${responseBody["status"]["description"]}`);
} else {
console.error("Unable to send message. " + error);
}
}
client.sms.message(messageCallback, phoneNumber, message, messageType);