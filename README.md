# Wallet Folio



Demo live : [https://walletfolio.pro/](https://walletfolio.pro/)

Demo vidéo : https://www.youtube.com/watch?v=bfs6MskSmUo

We created this app for the buidlHACKS Hackathon:
## Wallet Folio: Web3 Application
Challenge Description
We at DeCommas believe that access to organized blockchain data can unlock a billion possibilities and so we provide the best single unified API to bring full transparency and visibility to assets across all blockchain networks. With the DeCommas API, there is no need to invest developer resources in writing SQL or other queries since granular, decoded, multi-chain data is immediately available for 30+ blockchain networks including Ethereum,Arbitrum, BSC, Polygon, Fantom and Avalanche. DeCommas is fast becoming the go-to data provider, with the DeCommas API powering over 1,000 industry-leading projects such as Zerion, ChainGuardians, 0x and Reef.

The DeCommas Unified API is the fastest way to get blockchain data for your GR14 Hackathon project!


## The App


### Technical stack


- ReactJS & NextJS (Static site generator)
- Typescript
- TailwindCSS


### Features
The dApp have 4 main features which are (on all blockchain supported by DeCommas APIs) : 

- Track and check all tokens of an address (Tokens list, Folio history, TreeMap)
- Track all transactions for an address and get statistics for the address (Total fees, total transactions, total in, total out)
- A NFT collection explorer (track collections, tokenId, attributes, transactions, ....) (under construction)
- A events explorer (track all events/topics for a given contract) (under construction)



### Portfolio

![portfolio](https://github.com/buidlHACKS/dcomma/assets/16322269/4f93ab74-cf75-4c54-aab1-b4caad36a1e6)



*DeCommas APIs used : Endpoint: All Tokens Metadata*
- GET /v1/all_tokens_metadata



### Transactions
![transaction](https://github.com/buidlHACKS/dcomma/assets/16322269/1e18411b-f8bc-4ddf-82cb-925440764deb)

*DeCommas APIs used : Endpoint: Transactions*
- GET /v1/transactions/{address}


### NFT market
![nft](https://github.com/buidlHACKS/dcomma/assets/16322269/3d07f8cb-0811-4033-b457-cacadc452ce6)

*DeCommas APIs used : Endpoint: NFTs*
- GET /v1/nfts/{address}
- GET /v1/nft_metadata/{chain_name}/{contract_address}/{token_id}
- GET /v1/nft_holders/{chain_name}/{contract_address} 



## Run the project locally

To run the project you'll need NodeJS and yarn installed in your machine.

Install all dependencies

    yarn install


Start the project

    yarn dev

Then go to `localhost:3000` to see the app on your navigator

Build the project for production

    yarn build
