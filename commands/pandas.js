const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x150458)
	.setTitle('Biblioteca Pandas')
	.setURL('https://pandas.pydata.org/')
	.setAuthor({ name: 'Comandos Pandas', iconURL: 'https://www.programsbuzz.com/sites/default/files/logo/pandas-logo.png', url: 'https://pandas.pydata.org/' })
	.setDescription('Comandos mais utilizados em data analytics')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'import pandas as pd', value: 'Importa a biblioteca pandas no projeto com o apelido pd', inline: true },
		{ name: 'pd.read_csv()', value: 'Lê um arquivo de valores separados por vírgula (.csv) como um DataFrame', inline: true },
		{ name: 'pd.read_excel()', value: 'Lê um arquivo em formato excel (.xls, .xlsx, etc.) como um DataFrame', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'df.describe()', value: 'Mostra estatísticas descritivas do DataFrame', inline: true },
		{ name: 'df.info()', value: 'Imprime um resumo conciso do DataFrame', inline: true },
		{ name: 'df.shape', value: 'Retorna a tupla da forma (linhas, colunas) do DataFrame', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'df.sort_values()', value: 'Altera a ordem dos valores de uma coluna', inline: true },
		{ name: 'df.value_counts()', value: 'Retorna o valor da contagem para cada item exclusivo presente na coluna', inline: true },
		{ name: 'df.groupby()', value: 'Divide dados de uma ou mais colunas em grupos baseado em critérios pré-definidos', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'df.isnull()', value: 'Verifica se há algum valor ausente presente em um objeto do tipo array', inline: true },
		{ name: 'df.fillna()', value: 'Preenche os valores ausentes com base no método especificado', inline: true },
		{ name: 'df.duplicated()', value: 'Retorna uma série com valores "Verdadeiro" e "Falso" que descrevem as linhas duplicadas de um DataFrame', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pandas")
        .setDescription("Relembrar comandos do Pandas"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}