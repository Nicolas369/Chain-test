const Web3 = require("web3");
require('dotenv').config();

const url = process.env.ETHEREUM_NODE_WSS_URL;

const options = {
  timeout: 30000,
  clientConfig: {
    maxReceivedFrameSize: 100000000, 
    maxReceivedMessageSize: 100000000,
  },
  reconnect: {
    auto: true,
    delay: 5000,
    maxAttempts: 15,
    onTimeout: false,
  },
};

const web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));
const subscription = web3.eth.subscribe("pendingTransactions", (err, res) => {
  if (err) console.error(err);
});

const main =  () => {
  subscription.on("data", async (txHash) => {
    try {
      let tx = await web3.eth.getTransaction(txHash);
      console.log(tx);
    } catch (error) {
      console.error(error);
    }
  });
};

main(); 
console.log('Start... ');