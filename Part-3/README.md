<a href="http://youtube.a3b.io" target="_blank"><img src="https://github.com/net2devcrypto/NFT-Bridge-Web3-Portal-NextJS-EthersJS/blob/main/pics/nftbridge3.png" width="260" height="100"><h2>NFT Bridge with NextJS and EthersJS</h2></a>
##
Be sure to watch my Youtube tutorials so you can learn and follow along!

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

## Part-3 NextJS Full Function to enable the NFT Bridge Functionality

Click for video:

<a href="https://www.youtube.com/watch?v=YnsRnuKB6Gg&t=825s" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 

<h4> Function to obtain and define the source blockchain variables</h4>

```shell

  async function setSource(){
    const web3Modal = new Web3Modal();
    var providera = await web3Modal.connect();
    web3 = new Web3(providera);
    await providera.send('eth_requestAccounts');
    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
    document.getElementById('wallet-address').textContent = account;
    var goe = "0x5";
    var mm = "0x13881";
    var bsct = "0x61";
    const connected = await detectEthereumProvider();
    if (connected.chainId == goe) {
      var sNft = goeNFT
      var sCustody = goeCustody
      var sRpc = goerpc
      var erc20 = goeErc20
    }
    else if (connected.chainId == mm) {
      var sNft = mumNFT
      var sCustody = mumCustody
      var sRpc = mumrpc
      var erc20 = mumErc20
    }
    else if (connected.chainId == bsct) {
      var sNft = bsctNFT
      var sCustody = bsctCustody
      var sRpc = bsctrpc
      var erc20 = bsctErc20
    }
    const provider = new ethers.providers.JsonRpcProvider(sRpc)
    const key = simpleCrypto.decrypt(cipherEth)
    const wallet = new ethers.Wallet(key, provider);
    const contract = new ethers.Contract(sNft, NftABI, wallet);
    const itemArray = [];
    await contract.walletOfOwner(account).then((value => {
    value.forEach(async(id) => {
        let token = parseInt(id, 16)             
          const rawUri = contract.tokenURI(token)
          const Uri = Promise.resolve(rawUri)
          const getUri = Uri.then(value => {
            let str = value
            let cleanUri = str.replace('ipfs://', 'https://ipfs.io/ipfs/')
            let metadata = axios.get(cleanUri).catch(function (error) {
              console.log(error.toJSON());
            });
            return metadata;
          })
          getUri.then(value => {
            let rawImg = value.data.image
            var name = value.data.name
            var desc = value.data.description
            let image = rawImg.replace('ipfs://', 'https://ipfs.io/ipfs/')
              let meta = {
                name: name,
                img: image,
                tokenId: token,
                wallet: account,
                desc
              }
              itemArray.push(meta)
            })
          })
          }))
    await new Promise(r => setTimeout(r, 2000));
    console.log("Wallet Refreshed : " + sRpc)
    getSourceNft(sNft);
    getErc20(erc20);
    getSourceCustody(sCustody);
    getSourceRpc(sRpc);
    setNfts(itemArray);
  }
  ```
<h4> Function to Execute a NFT Transfer using the Bridge</h4>

```shell
async function initTransfer() {
  var bsc = "Binance Smart Chain";
  var poly = "Polygon";
  var eth = "Ethereum";
  if (bsc == destChain) {
    var dCustody = bsctCustody;
    var dRpc = bsctrpc;
    var explorer = "https://testnet.bscscan.com/tx/";
    var dNFT = bsctNFT;
  } else if (poly == destChain) {
    var dCustody = mumCustody;
    var dRpc = mumrpc;
    var explorer = "https://mumbai.polygonscan.com/tx/";
    var dNFT = polyNFT;
  } else if (eth == destChain) {
    var dCustody = goeCustody;
    var dRpc = goerpc;
    var explorer = "https://goerli.etherscan.io/tx/";
    var dNFT = goeNFT;
  }
  const tokenId = id;
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const userWallet = await signer.getAddress();
  const ethprovider = new ethers.providers.JsonRpcProvider(dRpc);
  const ethKey = simpleCrypto.decrypt(cipherEth);
  var wallet = new ethers.Wallet(ethKey, ethprovider);
  const sNFTCol = new ethers.Contract(sourceNft, NftABI, signer);
  const tokenContract = new ethers.Contract(erc20Contract, Erc20ABI, signer);
  const ethNFTCustody = new ethers.Contract(dCustody, CustodyABI, wallet);
  const dNFTCont = new ethers.Contract(dNFT, BridgeABI, wallet);
  handler();
  await new Promise((r) => setTimeout(r, 1000));
  let init = 'Initializing Transfer...'
  document.getElementById("displayconfirm1").innerHTML = init
  let confirmHolder = await sNFTCol.ownerOf(tokenId);
  let bridgeHolder = await dNFTCont.ownerOf(tokenId).catch(async (error)=> {
    console.log('Bridge NFT not present, Standby...');
    console.log('Bridge NFT Mint at Destination Processing');
  });
  await dNFTCont.ownerOf(tokenId).catch(async (error) => {
    if (error) {
        const rawTxn = await dNFTCont.populateTransaction.bridgeMint(
          bridgeWallet,
          tokenId);
        let signedTxn = await wallet.sendTransaction(rawTxn);
        await signedTxn.wait();
        console.log("Bridge NFT Minted at Destination!")
        const nftBridgeApprove = await dNFTCont.approve(dCustody, tokenId);
        await nftBridgeApprove.wait();
        console.log('Transferring NFT to Destination Bridge Custody');
        let gas = { gasLimit: 3000000 };
        const retaindNFT = await ethNFTCustody.retainNew(tokenId, gas);
        await retaindNFT.wait();
        console.log('NFT Successfully Transferred to Destination Custody!');
        var hash = signedTxn.hash;
        console.log("Confirmation TX: " + hash)
        console.log('Verifications completed!, Starting Bridge Transfer...');
    }
  else if (bridgeHolder == bridgeWallet) {
      console.log('Confirming Bridge NFT at Destination Custody...');
      const nftBridgeApprove = await dNFTCont.approve(dCustody, tokenId);
        const approveConfirm = await nftBridgeApprove.wait();
        console.log(approveConfirm);
        let gas = { gasLimit: 3000000 };
        const retaindNFT = await ethNFTCustody.retainNew(tokenId, gas);
        await retaindNFT.wait();
        console.log('NFT Successfully Transferred to Destination Custody!');
        console.log('Verifications completed!, Starting Bridge Transfer...');
      }
      else {
        console.log("Error submitting transaction");
      }
    })
 if (confirmHolder == userWallet) {
    let getHolder = await ethNFTCustody.holdCustody(tokenId);
    let unListed = "0x0000000000000000000000000000000000000000";
    if (confirmHolder == getHolder.holder) {
      console.log("User Confirmed, No Updates Needed");
    } else if (getHolder.holder == unListed) {
      console.log("User Confirmed, No Updates Needed");
    } else {
      let updOwner = await ethNFTCustody.updateOwner(tokenId, userWallet);
      let receipt = await updOwner.wait();
      if (receipt) {
        console.log("Holder Address Updated to: " + userWallet);
      } else {
        console.log("Error submitting transaction");
      }
    }
 }
  let status1 = "Verifying Details..."
  document.getElementById("displayconfirm1").innerHTML = status1
  await new Promise((r) => setTimeout(r, 4000));
  let status2 = "Verified, Bridge Initialized..."
  document.getElementById("displayconfirm1").innerHTML = status2
  await new Promise((r) => setTimeout(r, 4000));
  let status3 = "Please Approve NFT Transfer to Bridge."
  document.getElementById("displayconfirm1").innerHTML = status3
  const sNFTCustody = new ethers.Contract(sourceCustody, CustodyABI, signer);
  const tx1 = await sNFTCol.setApprovalForAll(sourceCustody, true);
  await tx1.wait();
  console.log("Approval to Transfer NFT Received from User!");
  let status4 = "Approval Received! Processing..."
  document.getElementById("displayconfirm1").innerHTML = status4
  await new Promise((r) => setTimeout(r, 4000));
  let status5 = "Please Execute NFT Transfer to Bridge."
  if (customPay == true) {
    const cost = await sNFTCustody.costCustom();
    let options = { gasLimit: 3000000 };
    document.getElementById("displayconfirm1").innerHTML = status5
    const tx2 = await tokenContract.approve(sourceCustody, cost);
    await tx2.wait();
    console.log("Approval to Transfer TX Fee Payment Received!");
    const tx3 = await sNFTCustody.retainNFTC(tokenId, options);
    await tx3.wait();
  }
  else {
    const costNative = await sNFTCustody.costNative();
    let options = { gasLimit: 3000000, value: costNative };
    document.getElementById("displayconfirm1").innerHTML = status5
    const tx3 = await sNFTCustody.retainNFTN(tokenId, options);
    await tx3.wait();
  }
  let status6 = "NFT has been transferred to Bridge!!" 
  let status7 = "In Transit to destination..."
  document.getElementById("displayconfirm1").innerHTML = status6
  document.getElementById("displayconfirm4").innerHTML = status7
  await new Promise((r) => setTimeout(r, 4000));
  console.log('Transferring to Destination Via: '+ dRpc);
  let gas = { gasLimit: 3000000 };
  let rawTxn = await ethNFTCustody.populateTransaction.releaseNFT(
    tokenId,
    userWallet,
    gas
  );
  let signedTxn = await wallet.sendTransaction(rawTxn);
  let receipt = await signedTxn.wait();
  if (receipt) {
    var confirmOut6 = ''
    var confirmOut1 = 'Transfer has been completed!'
    var confirmOut2 = 'Click for more info: '
    var confirmOut4 =  explorer + signedTxn.hash
    var confirmOut5 = 'Transaction Info'
    await new Promise((r) => setTimeout(r, 4000));
    document.getElementById("displayconfirm1").innerHTML = confirmOut1
    document.getElementById("displayconfirm2").innerHTML = confirmOut2
    document.getElementById("displayconfirm3").innerHTML = confirmOut5
    document.getElementById("displayconfirm4").innerHTML = confirmOut6
  } else {
    console.log("Error submitting transaction");
  }
  getConfirmLink(confirmOut4);
  setSource();
}
```
