require('@eth-optimism/hardhat-ovm');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();
require('hardhat-deploy');


module.exports = {
    ovm: {
        solcVersion: '0.7.6+commit.3b061308',
    },
    paths : {
        artifacts: './artifacts-ovm'
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_KEY,
    },
    solidity: {
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000000,
            },
        },
        version: '0.7.6',
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    networks: {
        'kovan-optimistic': {
            url: process.env.KOVAN_OPTIMISTIC_RPC_URL,
            chainId: 69,
            gasPrice: 15000000,
            accounts: [process.env.KOVAN_OPTIMISTIC_PRIVATE_KEY],
            ovm: true,
        },
    },
};
