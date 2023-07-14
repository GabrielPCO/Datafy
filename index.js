// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes`)
    }
}

// Lista os comandos disponíveis
//console.log(client.commands)

// Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`)
});
client.login(TOKEN)

// Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        switch (selected) {
            case "python":
                await interaction.reply("Documentação do Python: https://docs.python.org/3/")
                break;
            case "pandas":
                await interaction.reply("Documentação do Pandas: https://pandas.pydata.org/docs/user_guide/index.html")
                break;
            case "matplotlib":
                await interaction.reply("Documentação do Matplotlib: https://matplotlib.org/stable/index.html")
                break;
            case "seaborn":
                await interaction.reply("Documentação do Seaborn: https://seaborn.pydata.org/tutorial.html")
                break;
            case "scikit":
                await interaction.reply("Documentação do Scikit: https://scikit-learn.org/0.21/documentation.html")
                break;
        }
    }
    
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comando não encontrado")
        return
    }
    try {
        await command.execute(interaction)
    }
    catch (error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
    }
})