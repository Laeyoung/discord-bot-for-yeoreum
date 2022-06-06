/**
 * @file Sample Trigger command.
 * @author Naman Vrati
 * @since 2.0.0
 */

//import fetch from 'node-fetch';
const fetch = require("node-fetch");

const { yeoreum_api_endpoint } = require("./../../config.json");

// For now, the only available property is name array. Not making the name array will result in an error.

module.exports = {
	name: ["your", "trigger", "words", "in", "array"],

	/**
	 * @description Executes when it is triggered by trigger handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the trigger.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
	 */

	async execute(message, args) {
		//const param = new URLSearchParams({ message });
		const response = await fetch(yeoreum_api_endpoint + '?message=' + encodeURIComponent(message));
		const text = await response.text();

		console.log('response: ', text);

		message.channel.send({
			content: text,
		});
	},
};
