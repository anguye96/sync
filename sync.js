const chalk = require('chalk');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printColoredMessage(color, message) {
    console.log(chalk[color](message));
    await sleep(1000);  // Simulating some asynchronous operation
}

async function main() {
    const colors = ['red', 'green', 'blue'];

    // Create a list of promises
    const promises = colors.map(async (color, index) => {
        await printColoredMessage(color, `Async message ${index + 1}`);
    });

    // Wait for all promises to complete
    await Promise.all(promises);
}

// Run the asynchronous code
main();
