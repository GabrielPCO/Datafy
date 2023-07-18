const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x88AFBA)
	.setTitle('Biblioteca Seaborn')
	.setURL('https://seaborn.pydata.org/')
	.setAuthor({ name: 'Comandos Seaborn', iconURL: 'https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png', url: 'https://seaborn.pydata.org/' })
	.setDescription('Comandos mais utilizados em data analytics')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'import seaborn as sns', value: 'Importa a biblioteca seaborn no projeto com o apelido sns', inline: true },
		{ name: 'sns.load_dataset()', value: 'Carrega uma base de dados do seaborn', inline: true },
		{ name: 'sns.barplot()', value: 'Cria um gráfico de barras', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'sns.regplot()', value: 'Cria um gráfico de regressão linear', inline: true },
		{ name: 'sns.boxplot()', value: 'Cria um gráfico de caixa', inline: true },
		{ name: 'sns.kdeplot()', value: 'Cria um gráfico de densidade', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'sns.pairplot()', value: 'Cria um gráfico de pares', inline: true },
		{ name: 'sns.heatmap()', value: 'Cria um gráfico de mapa de calor', inline: true },
		{ name: 'sns.histplot()', value: 'Cria um gráfico de histograma', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'sns.lineplot()', value: 'Cria um gráfico de linha', inline: true },
		{ name: 'sns.distplot()', value: 'Cria um gráfico de dispersão', inline: true },
		{ name: 'sns.barplot()', value: 'Cria um gráfico de barras', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("seaborn")
        .setDescription("Relembrar comandos do Seaborn"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}