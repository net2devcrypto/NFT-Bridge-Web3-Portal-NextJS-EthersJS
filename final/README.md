# 0x-Protocol-DeFI-Swap-NextJS
<a href="http://youtube.a3b.io" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/n2Dex-img.png" width="200" height="80"></a>

👑 This is the best 0x Protocol DeFI Swap App built for NextJS - Add this to your existing NextJS Project for a full fledged powerful DeFI Swap Interface Functionality. Allow Users to exchange crypto right from your web front end. This repo contains all the files to add the n2DeX 0x Protocol DeFI Swap Interface to your NextJS Project! Be sure to watch my Youtube tutorial vid and follow along!

<div class='row'>
<img src="https://github.com/net2devcrypto/misc/blob/main/dashboard.PNG" width="320" height="400">
<img src="https://github.com/net2devcrypto/misc/blob/main/dashboard2.PNG" width="300" height="400">
</div>

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **
  
Click for video:

<a href="https://youtu.be/adD83Y38NS8" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 

Steps:

1-Create an new NextJS app:

```shell
npx create-next-app defiswap
```

2- Install Dependencies:

```shell
cd defiswap
npm i @nextui-org/react web3 web3modal ethers alchemy-sdk sf-font
npm i --save-dev @types/react
npm i --save-dev @types/qs
```

3- Replace all files and folders in your project with the ones attached to this repo.

Add all files and folders to the root project directory "defiswap", overwrite when prompted.

4- Create a new Alchemy API App for Ethereum Mainnet and update the API Key field with your

Alchemy API Key in the defiswap.js file

```shell
 const config = {
      apiKey: "PLACE YOUR API KEY",
      network: Network.ETH_MAINNET,
    };
```

Save File after updating!


5- Start your application, navigate to the project page and enjoy!

```shell
npm run dev
```

############################################################################ 

OPTIONAL - If you just need to add the DeFI swap to any NextJS Project:

- Install dependencies from step 2 to your project root folder.

- Add the engine folder and the public folder contents to your project root folder. 

- Add the tokens.js in pages/api folder and the defiswap.js in /pages folder.

- Import the defiswap interface in app.js or any other page accordingly:

```shell
import Defiswap from './defiswap';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Defiswap />
    </div>
  );
}

```



