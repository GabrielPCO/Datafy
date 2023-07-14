const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma biblioteca selecionada")
            .addOptions({
                        label: "python",
                        description: "Veja a documentação do Python",
                        value: "python"
                        },
                        {
                        label: "pandas",
                        description: "Veja a documentação do Pandas",
                        value: "pandas"
                        },
                        {
                        label: "matplotlib",
                        description: "Veja a documentação do Matplotlib",
                        value: "matplotlib"
                        },
                        {
                        label: "seaborn",
                        description: "Veja a documentação do Seaborn",
                        value: "seaborn"
                        },
                        {
                        label: "scikit-learn",
                        description: "Veja a documentação do Scikit-learn",
                        value: "scikit"
                        },
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação das bibliotecas mais usadas em data analytics"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das bibliotecas abaixo:", components: [row]})
    }
}