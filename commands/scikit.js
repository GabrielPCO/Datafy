const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0xEB9F4D)
	.setTitle('Biblioteca Scikit-learn')
	.setURL('https://scikit-learn.org/stable/')
	.setAuthor({ name: 'Comandos Scikit-learn', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1280px-Scikit_learn_logo_small.svg.png', url: 'https://scikit-learn.org/stable/' })
	.setDescription('Comandos mais utilizados em data analytics')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'from sklearn.ensable import RandomForrestClassifier', value: 'Importa da biblioteca do scikit o classificador do tipo Random Forrest', inline: true },
		{ name: 'from sklearn.preprocessing import StandardScaler', value: 'Importa da biblioteca do scikit o método de transformação StandardScaler', inline: true },
		{ name: 'from sklearn.preprocessing import MinMaxScaler', value: 'Importa da biblioteca do scikit o método de transformação MinMaxScaler', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'from sklearn.pipeline import make_pipeline', value: 'Importa da biblioteca do scikit o módulo de manipulação dos dados Pipeline', inline: true },
		{ name: 'from sklearn.metrics import accuracy_score', value: 'Importa da biblioteca do scikit o módulo de cálculo de acurácia do modelo', inline: true },
		{ name: 'data.fit(x,y)', value: 'ajusta os dados x e y do modelo', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'make_pipeline()', value: 'Cria um objeto do tipo pipeline', inline: true },
		{ name: 'accuracy_score()', value: 'Calcula a acurácia do modelo', inline: true },
		{ name: 'from sklearn.model_selection import train_test_split', value: 'Importa da biblioteca do scikit o classificador do tipo Train Test', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'train_test_split()', value: 'divide os dados do modelo e classifica como treino ou teste', inline: true },
		{ name: 'from sklearn import linear_model', value: 'Importa o modelo de regressão linear', inline: true },
		{ name: 'from sklearn.neighbors import NearestNeighbors', value: 'Importa da biblioteca do scikit o classificador do tipo NearestNeighbors', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sklearn")
        .setDescription("Relembrar comandos do Scikit-learn"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}