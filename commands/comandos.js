const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0xa4e1ae)
	.setTitle('Comandos Datafy')
	.setDescription('Lista de todos os comandos do bot')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '/ping', value: 'Testa a velocidade de resposta do bot', inline: true },
		{ name: '/python', value: 'Comandos do python mais utilizados para data analytics', inline: true },
		{ name: '/pandas', value: 'Comandos do pandas mais utilizados para data analytics', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '/matplotlib', value: 'Comandos do matplotlib mais utilizados para data analytics', inline: true },
		{ name: '/seaborn', value: 'Comandos do seaborn mais utilizados para data analytics', inline: true },
		{ name: '/sklearn', value: 'Comandos do scikit-learn mais utilizados para data analytics', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '/playlist', value: 'Playlist de vídeos sobre data analytics', inline: true },
		{ name: '/docs', value: 'Lista com links para a documentação de cada biblioteca', inline: true },
        { name: '/comandos', value: 'Lista dos comandos do bot', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("comandos")
        .setDescription("Relembrar comandos do Bot"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}