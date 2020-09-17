/***
 *  replace TODO with your realy deployment information
 */

const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

let account = {
    address: '0x2f3b2ab8c9a44a8d82149880907e90178d5ffe4b', // TODO account address
    key: '' // TODO account key, not prefix 0x
};

// TODO replace abi, bytecode and network with your evniroment
let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
let bytecode = '60806040523480156200001157600080fd5b506601c6bf52634000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506601c6bf526340006005819055506040805190810160405280600a81526020017f43414c4c20546f6b656e0000000000000000000000000000000000000000000081525060009080519060200190620000b892919062000129565b506040805190810160405280600481526020017f43414c4c00000000000000000000000000000000000000000000000000000000815250600190805190602001906200010692919062000129565b506006600260006101000a81548160ff021916908360ff160217905550620001d8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016c57805160ff19168380011785556200019d565b828001600101855582156200019d579182015b828111156200019c5782518255916020019190600101906200017f565b5b509050620001ac9190620001b0565b5090565b620001d591905b80821115620001d1576000816000905550600101620001b7565b5090565b90565b610fbb80620001e86000396000f3fe608060405234801561001057600080fd5b50600436106100ec576000357c01000000000000000000000000000000000000000000000000000000009004806342966c68116100a957806395d89b411161008357806395d89b41146103dc578063a457c2d71461045f578063a9059cbb146104c5578063dd62ed3e1461052b576100ec565b806342966c681461030857806370a082311461033657806379cc67901461038e576100ec565b806306fdde03146100f1578063095ea7b31461017457806318160ddd146101da57806323b872dd146101f8578063313ce5671461027e57806339509351146102a2575b600080fd5b6100f96105a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013957808201518184015260208101905061011e565b50505050905090810190601f1680156101665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c06004803603604081101561018a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610645565b604051808215151515815260200191505060405180910390f35b6101e261065c565b6040518082815260200191505060405180910390f35b6102646004803603606081101561020e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610666565b604051808215151515815260200191505060405180910390f35b610286610717565b604051808260ff1660ff16815260200191505060405180910390f35b6102ee600480360360408110156102b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061072e565b604051808215151515815260200191505060405180910390f35b6103346004803603602081101561031e57600080fd5b81019080803590602001909291905050506107d3565b005b6103786004803603602081101561034c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107e0565b6040518082815260200191505060405180910390f35b6103da600480360360408110156103a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610829565b005b6103e4610837565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610424578082015181840152602081019050610409565b50505050905090810190601f1680156104515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104ab6004803603604081101561047557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108d9565b604051808215151515815260200191505060405180910390f35b610511600480360360408110156104db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061097e565b604051808215151515815260200191505060405180910390f35b61058d6004803603604081101561054157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610995565b6040518082815260200191505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561063b5780601f106106105761010080835404028352916020019161063b565b820191906000526020600020905b81548152906001019060200180831161061e57829003601f168201915b5050505050905090565b6000610652338484610a1c565b6001905092915050565b6000600554905090565b6000610673848484610b7f565b61070c843361070785600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d4f90919063ffffffff16565b610a1c565b600190509392505050565b6000600260009054906101000a900460ff16905090565b60006107c933846107c485600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d7190919063ffffffff16565b610a1c565b6001905092915050565b6107dd3382610d92565b50565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108338282610ee8565b5050565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108cf5780601f106108a4576101008083540402835291602001916108cf565b820191906000526020600020905b8154815290600101906020018083116108b257829003601f168201915b5050505050905090565b6000610974338461096f85600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d4f90919063ffffffff16565b610a1c565b6001905092915050565b600061098b338484610b7f565b6001905092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610a5857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a9457600080fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610bbb57600080fd5b610c0d81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d4f90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ca281600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d7190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211151515610d6057600080fd5b600082840390508091505092915050565b6000808284019050838110151515610d8857600080fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dce57600080fd5b610de381600554610d4f90919063ffffffff16565b600581905550610e3b81600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d4f90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b610ef28282610d92565b610f8b8233610f8684600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d4f90919063ffffffff16565b610a1c565b505056fea165627a7a72305820ff773d6c169bde02b6be683e9ece3a2273580a633590e0a17f5059df83bf6ee20029';

// Ganache or Private Ethereum Blockchain
let selectedHost = 'http://182.92.62.71:8545';

let web3 = new Web3(new Web3.providers.HttpProvider(selectedHost));

async function deployContract() {
    let tokenContract = new web3.eth.Contract(abi);
    let contractData = null;

    // Prepare the smart contract deployment payload
    // If the smart contract constructor has mandatory parameters, you supply the input parameters like below 
    
    // Use this code if contract constructor has parameters
    // contractData = tokenContract.deploy( param1, param2, ..., {
    //    data: '0x' + bytecode
    // }).encodeABI();

    contractData = tokenContract.deploy({
        data: '0x' + bytecode
    }).encodeABI();

    let nonce = await web3.eth.getTransactionCount(account.address);
    console.log(nonce);
    let nonceHex = web3.utils.toHex(nonce);

    let gasPrice = '6';
    console.dir(web3.eth);
    let gasPriceHex = web3.utils.toHex(gasPrice);
    let gasLimitHex = web3.utils.toHex(6000000);
    let network = '200812';

    // Prepare the raw transaction information
    let rawTx = {
        nonce: nonceHex,
        gasPrice: gasPriceHex,
        gasLimit: gasLimitHex,
        data: contractData,
        from: account.address,
        chainId: web3.utils.toHex(network)
    };
    console.dir(rawTx);

    // Get the account private key, need to use it to sign the transaction later.
    let privateKey = Buffer.from(account.key, 'hex')

    let tx = new Tx(rawTx);

    // Sign the transaction 
    tx.sign(privateKey);
    let serializedTx = tx.serialize();

    let receipt = null;

    // Submit the smart contract deployment transaction
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), async function(err, hash) {
        if (err) {
            console.log(err); return; 
        }
    
        // Log the tx, you can explore status manually with eth.getTransaction()
        console.log('Contract creation tx: ' + hash);
    
        // Wait for the transaction to be mined
        while (receipt == null) {
            receipt = await web3.eth.getTransactionReceipt(hash);
        }

        console.log('Contract address: ' + receipt.contractAddress);    
    });    
}

deployContract();
