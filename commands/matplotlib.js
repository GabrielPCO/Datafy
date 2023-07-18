const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x285479)
	.setTitle('Biblioteca Matplotlib')
	.setURL('https://matplotlib.org/')
	.setAuthor({ name: 'Comandos Matplotlib', iconURL: 'https://numfocus.org/wp-content/uploads/2016/07/Matplotlib_Logo_191209.png', url: 'https://matplotlib.org/' })
	.setDescription('Comandos mais utilizados em data analytics')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'import matplotlib.pyplot as plt', value: 'Importa a biblioteca matplotlib.pyplot no projeto com o apelido plt', inline: true },
		{ name: 'plt.figure()', value: 'Define as propriedades da figura como o tamanho, dpi, etc', inline: true },
		{ name: 'plt.plot()', value: 'Cria um gráfico de linhas por padrão, podendo fazer outros tipos alterando a propriedade "kind"', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'plt.subplots()', value: 'Cria e inicializa os eixos da figura', inline: true },
		{ name: 'plt.scatter(x,y)', value: 'Desenha um gráfico de disperção de x e y', inline: true },
		{ name: 'plt.hist()', value: 'Cria um histograma', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'plt.bar()', value: 'Cria um gráfico de barras', inline: true },
		{ name: 'plt.xlabel()', value: 'Titula o eixo x', inline: true },
		{ name: 'plt.ylabel()', value: 'Titula o eixo y', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'plt.title()', value: 'Adiciona um título ao gráfico atual', inline: true },
		{ name: 'plt.legend()', value: 'Configura a legenda do gráfico atual', inline: true },
		{ name: 'plt.show()', value: 'Mostra o gráfico', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("matplotlib")
        .setDescription("Relembrar comandos do Matplotlib"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}