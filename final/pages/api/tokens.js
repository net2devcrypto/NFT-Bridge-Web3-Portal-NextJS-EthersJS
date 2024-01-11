export default function handler(req, res) {
    res.status(200).json({ 
            "tokens": [
              {
                "chainId": 1,
                "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
                "name": "Uniswap",
                "symbol": "UNI",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/uni.png"
              },
              {
                "chainId": 1,
                "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "name": "Tether",
                "symbol": "USDT",
                "decimals": 6,
                "logoURI": "http://localhost:3000/tokenimg/usdt.png"
              },
              {
                "chainId": 1,
                "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "logoURI": "http://localhost:3000/tokenimg/usdc.png"
              },
              {
                "chainId": 1,
                "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
                "name": "Chainlink",
                "symbol": "LINK",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/link.png"
              },
              {
                "chainId": 1,
                "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
                "name": "Polygon",
                "symbol": "MATIC",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/matic.webp"
              },
              {
                "chainId": 1,
                "address": "0xe41d2489571d322189246dafa5ebde1f4699f498",
                "name": "0x",
                "symbol": "ZRX",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/zrx.png"
              },
              {
                "chainId": 1,
                "address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                "name": "Sushi",
                "symbol": "SUSHI",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/sushi.webp"
              },
              {
                "chainId": 1,
                "address": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
                "name": "Aave",
                "symbol": "AAVE",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/aave.webp"
              },
              {
                "chainId": 1,
                "address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
                "name": "The Graph",
                "symbol": "GRT",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/grt.webp"
              },
              {
                "chainId": 1,
                "address": "0x111111111117dc0aa78b770fa6a738034120c302",
                "name": "1inch",
                "symbol": "1INCH",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/1inch.webp"
              },
              {
                "chainId": 1,
                "address": "0xed04915c23f00a313a544955524eb7dbd823143d",
                "name": "Alchemy Pay",
                "symbol": "ACH",
                "decimals": 8,
                "logoURI": "http://localhost:3000/tokenimg/ach.webp"
              },
              {
                "chainId": 1,
                "address": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
                "name": "Ankr",
                "symbol": "ANKR",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/ankr.webp"
              },
              {
                "chainId": 3,
                "address": "0x0fF1194a5dA3D1bFcA6db0dd80914f97Ed638F2a",
                "name": "N2D Rewards",
                "symbol": "N2DR",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/n2dr.png"
              },
              {
                "chainId": 3,
                "address": "0x9049AdfdD649154300A7449A5fC88Fc4Cf348d0a",
                "name": "Net2Dev USD",
                "symbol": "n2USD",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/usdt.png"
              },
              {
                "chainId": 3,
                "address": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
                "name": "RopstenETH",
                "symbol": "WETH",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/eth.png"
              },
              {
                "chainId": 3,
                "address": "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
                "name": "RopstenUSDC",
                "symbol": "RUSDC",
                "decimals": 6,
                "logoURI": "http://localhost:3000/tokenimg/usdc.png"
              },
              {
                "chainId": 3,
                "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                "name": "RopUniswap",
                "symbol": "RUNI",
                "decimals": 18,
                "logoURI": "http://localhost:3000/tokenimg/uni.png"
              },
            {
              "chainId": 3,
              "address": "0xad6d458402f60fd3bd25163575031acdce07538d",
              "name": "RopDai",
              "symbol": "RDAI",
              "decimals": 18,
              "logoURI": "http://localhost:3000/tokenimg/dai.svg"
            },
            {
              "chainId": 5,
              "address": "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
              "name": "GoerliEth",
              "symbol": "GoETH",
              "decimals": 18,
              "logoURI": "http://localhost:3000/tokenimg/eth.png"
            },
            {
              "chainId": 5,
              "address": "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60",
              "name": "GoerliDai",
              "symbol": "GoDAI",
              "decimals": 18,
              "logoURI": "http://localhost:3000/tokenimg/dai.svg"
            },
            {
              "chainId": 5,
              "address": "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C",
              "name": "GoerliUSDC",
              "symbol": "GoUSDC",
              "decimals": 6,
              "logoURI": "http://localhost:3000/tokenimg/usdc.png"
            }
            ]
          }          
 )
  }