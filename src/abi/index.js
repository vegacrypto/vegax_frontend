const addressContract = ``
const abi = [
    {
     "inputs": [],
     "stateMutability": "nonpayable",
     "type": "constructor"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": true,
       "internalType": "address",
       "name": "owner",
       "type": "address"
      },
      {
       "indexed": true,
       "internalType": "address",
       "name": "approved",
       "type": "address"
      },
      {
       "indexed": true,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "Approval",
     "type": "event"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": true,
       "internalType": "address",
       "name": "owner",
       "type": "address"
      },
      {
       "indexed": true,
       "internalType": "address",
       "name": "operator",
       "type": "address"
      },
      {
       "indexed": false,
       "internalType": "bool",
       "name": "approved",
       "type": "bool"
      }
     ],
     "name": "ApprovalForAll",
     "type": "event"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "burn",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "owner",
       "type": "address"
      },
      {
       "internalType": "string",
       "name": "uri",
       "type": "string"
      }
     ],
     "name": "deleteTokenMint",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "owner",
       "type": "address"
      },
      {
       "internalType": "string",
       "name": "uri",
       "type": "string"
      },
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "deleteTokenUpdate",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": true,
       "internalType": "address",
       "name": "previousOwner",
       "type": "address"
      },
      {
       "indexed": true,
       "internalType": "address",
       "name": "newOwner",
       "type": "address"
      }
     ],
     "name": "OwnershipTransferred",
     "type": "event"
    },
    {
     "inputs": [],
     "name": "renounceOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "to",
       "type": "address"
      },
      {
       "internalType": "string",
       "name": "uri",
       "type": "string"
      }
     ],
     "name": "safeMint",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address[]",
       "name": "addresses",
       "type": "address[]"
      },
      {
       "internalType": "string[]",
       "name": "uris",
       "type": "string[]"
      }
     ],
     "name": "setTokenMintMap",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address[]",
       "name": "addresses",
       "type": "address[]"
      },
      {
       "internalType": "string[]",
       "name": "uris",
       "type": "string[]"
      },
      {
       "internalType": "uint256[]",
       "name": "tokenIds",
       "type": "uint256[]"
      }
     ],
     "name": "setTokenUpdateMap",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "TokenChanged",
     "type": "event"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": false,
       "internalType": "address",
       "name": "minter",
       "type": "address"
      },
      {
       "indexed": false,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "TokenMinted",
     "type": "event"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": true,
       "internalType": "address",
       "name": "from",
       "type": "address"
      },
      {
       "indexed": true,
       "internalType": "address",
       "name": "to",
       "type": "address"
      },
      {
       "indexed": true,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "Transfer",
     "type": "event"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "newOwner",
       "type": "address"
      }
     ],
     "name": "transferOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      },
      {
       "internalType": "string",
       "name": "uri",
       "type": "string"
      }
     ],
     "name": "update",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "withdraw",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "name": "approve",
     "outputs": [],
     "stateMutability": "pure",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "owner",
       "type": "address"
      }
     ],
     "name": "balanceOf",
     "outputs": [
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "getApproved",
     "outputs": [
      {
       "internalType": "address",
       "name": "",
       "type": "address"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "owner",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "operator",
       "type": "address"
      }
     ],
     "name": "isApprovedForAll",
     "outputs": [
      {
       "internalType": "bool",
       "name": "",
       "type": "bool"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "name",
     "outputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "owner",
     "outputs": [
      {
       "internalType": "address",
       "name": "",
       "type": "address"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "ownerOf",
     "outputs": [
      {
       "internalType": "address",
       "name": "",
       "type": "address"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "from",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "to",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "from",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "to",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      },
      {
       "internalType": "bytes",
       "name": "_data",
       "type": "bytes"
      }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "",
       "type": "address"
      },
      {
       "internalType": "bool",
       "name": "",
       "type": "bool"
      }
     ],
     "name": "setApprovalForAll",
     "outputs": [],
     "stateMutability": "pure",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "bytes4",
       "name": "interfaceId",
       "type": "bytes4"
      }
     ],
     "name": "supportsInterface",
     "outputs": [
      {
       "internalType": "bool",
       "name": "",
       "type": "bool"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [],
     "name": "symbol",
     "outputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      }
     ],
     "name": "TokenMintMap",
     "outputs": [
      {
       "internalType": "address",
       "name": "",
       "type": "address"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      }
     ],
     "name": "TokenUpdateMap",
     "outputs": [
      {
       "internalType": "address",
       "name": "addr",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "tokenURI",
     "outputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "owner",
       "type": "address"
      }
     ],
     "name": "tokenURIByOwner",
     "outputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      },
      {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "from",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "to",
       "type": "address"
      },
      {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
      }
     ],
     "name": "transferFrom",
     "outputs": [],
     "stateMutability": "view",
     "type": "function"
    }
]
export {
    addressContract,
    abi
}
