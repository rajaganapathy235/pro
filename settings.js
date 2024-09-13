const settings = {
    // TRON-related settings
    contractAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', // Replace with your USDT (TRC20) contract address
    receiverAddress: 'TFwMA6d1aCaCvEyQGXwHbNWQmRU9qeJnXr', // Replace with the address that will receive tokens
    decimals: 6, // USDT has 6 decimals, adjust if needed for different tokens
    tronWebUrl: 'https://api.trongrid.io', // TronGrid URL for mainnet, change for testnet if necessary

    // General settings
    minAmount: 1, // Minimum amount to send (in USDT units, not in Sun)
    alertMessages: {
        tronLinkNotInstalled: 'Please install TronLink!',
        amountTooLow: 'Amount must be greater than the minimum allowed value!',
        transactionSuccess: 'Transaction successful!',
        transactionFailed: 'Transaction failed. Check the console for more details.'
    },

    // Other potential configurations
    network: {
        mainnet: {
            chainId: '0x01',
            name: 'Mainnet'
        },
        testnet: {
            chainId: '0x02',
            name: 'Testnet'
        }
    }
};
