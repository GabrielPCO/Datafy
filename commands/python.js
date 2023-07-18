const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0xF9DB67)
	.setTitle('Programação Python')
	.setURL('https://www.python.org/')
	.setAuthor({ name: 'Comandos Python', iconURL: 'https://freepngimg.com/thumb/python_logo/5-2-python-logo-png-image.png', url: 'https://www.python.org/' })
	.setDescription('Comandos mais utilizados em data analytics')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'print()', value: 'Imprime no terminal', inline: true },
		{ name: 'input()', value: 'aguarda o usuário fornecer um valor', inline: true },
		{ name: 'if():', value: 'estrutura de seleção de um ramo', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'if(): else', value: 'estrutura de seleção de dois ramos', inline: true },
		{ name: 'if(): elif(): else', value: 'estrutura de seleção de múltiplos ramos', inline: true },
		{ name: 'for():', value: 'Estrutura de repetição definida', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'while():', value: 'Estrutura de repetição indefinida', inline: true },
		{ name: 'range()', value: 'Cria uma lista com progressão aritimética', inline: true },
		{ name: 'def ():', value: 'Cria uma função', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'list()', value: 'Cria uma lista', inline: true },
		{ name: 'and', value: 'Conjunção lógica ou produto lógico', inline: true },
		{ name: 'or', value: 'Disjunção lógica ou soma lógica', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("python")
        .setDescription("Relembrar comandos do Python"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}