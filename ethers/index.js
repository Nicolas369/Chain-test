const ethers = require("ethers");
require('dotenv').config();

const url = process.env.ETHEREUM_NODE_WSS_URL;

const main = () => {
  const wsProvider = new ethers.providers.WebSocketProvider(url); 
  
  wsProvider.on("pending", async (txHash) => {
      try {
        const tx = await wsProvider.getTransaction(txHash);
        console.log(tx);
      } catch (error) {
        console.error(error);
      }
  });

  wsProvider._websocket.on("error", async () => {
    console.log(`Unable to connect, retrying in 5 seconds...`);
    setTimeout(main, 5000);
  });

  wsProvider._websocket.on("close", async (code) => {
    console.log(`Connection lost with code ${code}! retrying in 5 seconds...`);
    wsProvider._websocket.terminate();
    setTimeout(main, 5000);
  });
};

main();