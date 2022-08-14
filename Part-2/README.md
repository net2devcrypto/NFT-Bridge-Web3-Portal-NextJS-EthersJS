<a href="http://youtube.a3b.io" target="_blank"><img src="https://github.com/net2devcrypto/NFT-Bridge-Web3-Portal-NextJS-EthersJS/blob/main/pics/nftbridge3.png" width="260" height="100"><h2>NFT Bridge with NextJS and EthersJS</h2></a>
##

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

## Part-2 Bridge NFT Custodial and Token Smart Contracts

Click for video:

<a href="https://www.youtube.com/watch?v=gM59komkJXE" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 

Please find in Part-2 Folder on this Repo the following Smart Contracts to practice along:

<h4>NFT-Bridge-Custodial-SmartContract-v1.sol</h4>

- The NFT Bridge Custodial Smart Contract will control NFT Release and Retain Functions. 

- It will store NFT's from the source blockchain and also facilitate releasing NFT's at the destination smart contract.

- You must associate this Custodial smart contract with a NFT Collection Smart Contract in the source Blockchain. 

- This contract must be associated with the NFT Bridge Token Smart Contract on the destination blockchains during deployment.

<h4>NFT-Bridge-Custodial-SmartContract-with-CustomERC20-PayTokens-v1.sol</h4>

- Same contract as previous but with added capabilities to charge bridge transaction fees with custom ERC-20 tokens. 

- This contract must also be associated with an NFT Collection and Custom ERC-20 Token SmartContracts at the Source Blockchain
and associated to an Bridge NFT Token and ERC20 Token Smartcontracts at the destination blockchains.

<h4>NFT-Bridge-Token-SmartContract-v1.sol</h4>

- This is the Bridge NFT Token Smartcontract. This ERC721 NFT SmartContract will facilitate NFT minting at the destination
blockchains.

- It has been written to allow custom NFT ID minting.





