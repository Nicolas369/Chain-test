# Made by Nicolas Gabrenas
## Chain-test

This is a test project.
retrieves pending transactions from the EVM mempool and displays them to the user on the console.

> It is implemented using both web3.js and ethers.js, both implementations do the same thing, the goal is to show the ability to do it with both.

To run this project you need to have `node` and `npm` installed.

Once installed run the commands:
````
git clone https://github.com/Nicolas369/Chainstack-test-task.git
cd Chainstack-test-task
npm install
````
Once this is done, create an `.env` file and save the address of your node in the variable `ETHEREUM_NODE_WSS_URL`

Then on separate consoles, individually run the commands:
````
node ethers\index.js
node web3\index.js
````
The console outputs will be the pending transactions of the provided node.
