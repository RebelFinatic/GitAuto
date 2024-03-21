import shell from 'shelljs';
import chalk from 'chalk';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const command = process.argv[2];

const minutes = process.env.DURATION;
const the_interval = minutes * 60 * 1000;

async function sendDiscordMessage(title, description) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [{
                    title: title,
                    description: description,
                    color: 3447003,
                    timestamp: new Date().toISOString(),
                }],
            }),
        });
        if (!response.ok) {
            console.error(chalk.red(`Failed to send Discord notification. Status: ${response.status}`));
        }
    } catch (error) {
        console.error(chalk.red(`Error sending Discord message: ${error}`));
    }
}


function pullRepo() {
    const startMessage = "Pulling down CianticRP-V3 Repo";
    console.log(chalk.blue(startMessage));
    sendDiscordMessage("Repository Pull Initiated", startMessage);
    
    if (shell.exec(`git -C ${process.env.OUTPUT_DIR} pull ${process.env.GIT_REPO}`).code !== 0) {
        const errorMessage = 'Error: Git pull failed';
        console.error(chalk.red(errorMessage));
        sendDiscordMessage("Repository Pull Failed", errorMessage);
        shell.exit(1);
    } else {
        const successMessage = "Successfully pulled down CianticRP-V3 Repo";
        console.log(chalk.blue(successMessage));
        sendDiscordMessage("Repository Pull Success", successMessage);
    }
}


if (command === 'pull') {
    console.log(chalk.green("Manual git pull initiated..."));
    sendDiscordMessage("Manual git pull initiated...");
    pullRepo();
} else if (command === 'auto') {
    console.log(chalk.green("Auto git pull script started...."));
    sendDiscordMessage("Auto git pull script started....");
    setInterval(() => {
        pullRepo();
    }, the_interval);
} else {
    console.log(chalk.yellow("Command not recognized. Use 'pull' for a manual pull or 'auto' for automatic pulling."));
    sendDiscordMessage("Command not recognized. Use 'pull' for a manual pull or 'auto' for automatic pulling.");
}
