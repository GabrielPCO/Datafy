const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist de vídeos tutoriais de data analytics'"),

    async execute(interaction) {
        await interaction.reply("https://www.youtube.com/playlist?list=PLwh0rpCbdigC3WvyB1mYOOMzy3jqY9xeB")
    }
}