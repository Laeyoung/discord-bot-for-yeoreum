/**
 * @file Sample help command with slash command.
 * @author Naman Vrati
 * @author Thomas Fournier <thomas@artivain.com>
 * @since 3.0.0
 * @version 3.1.0
 */

// Deconstructed the constants we need in this file.

const { MessageEmbed, Collection } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	// The data needed to register slash commands to Discord.
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription(
			"ping and pong."
		)
		.addStringOption((option) =>
			option
				.setName("message")
				.setDescription("The specific messange to pong")
		),

	/**
	 * @description Executes when the interaction is called by interaction handler.
	 * @author Naman Vrati
	 * @author Thomas Fournier <thomas@artivain.com>
	 * @param {*} interaction The interaction object of the command.
	 */

	async execute(interaction) {
		/**
		 * @type {Collection}
		 * @description Collection of all slash commands
		 */
		const commands = interaction.client.slashCommands;

		/**
		 * @type {string}
		 * @description The "command" argument
		 */
		let pingMessage = interaction.options.getString("message");

		/**
		 * @type {MessageEmbed}
		 * @description Help command's embed
		 */
		const helpEmbed = new MessageEmbed()
			.setColor(0x4286f4)

		if (pingMessage) {
			// If a single command has been asked for, send only this command's help.
			// Added in version 3.1.0
			helpEmbed
				.setTitle(`Ping-pong`)
				.setDescription("PONG! " + pingMessage);
		} else {
			helpEmbed.setTitle("No message for ping-pong");
		};

		// Replies to the interaction!

		await interaction.reply({
			embeds: [helpEmbed],
		});
	},
};
