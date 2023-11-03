import axios from 'axios';
import qs from 'query-string';

const dcommas_api = "https://datalayer.decommas.net/datalayer/api/v1/";
const API_KEY = "9de81da143935703a5234c3fb8e571d8fbc0e1e3";

const sendRequest = async (config: {
  query?: any;
  url: string;
  type?: string;
  headers?: any;
  body?: any;
}) => {
  try {
    const response = await axios.get(qs.stringifyUrl({ url: dcommas_api + config.url, query: config.query }), {
    // const response = await axios.get(qs.stringifyUrl({ url: dcommas_api + config.url  }), {
      method: config.type || "GET",
      headers: config.headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const reqTransactions = ( address: string, chainname: string ) =>
{
  try {
    return sendRequest( {
    url: `transactions/${ address }?networks=${ chainname }&api-key=${ API_KEY }`,
        // url: `transactions/${ address }?networks=${ chainname }&api-key=${ API_KEY }`,

    // query:`networks=${ chainname }&api-key=${ API_KEY }`,
  });
  } catch (error) {
    console.log(error)
  }
  
};

export const reqFolio = (chainname: string, address: string) => {
  return sendRequest({
    url: `tokens/${ address }?networks=${ chainname }&api-key=${ API_KEY }`,
  });
};

export const reqBalanceOfAddress = ( chainname: string, address: string ) =>
{
try {
   return sendRequest({
    //  url: `coins/${ address }?&api-key=${ API_KEY }`,
     url: `coins/${ address }?networks=${ chainname }&api-key=${ API_KEY }`,
  });
} catch (error) {
  console.log("reqbalance error ==========>>>>>",error)
}
 
};

export const reqChains = () => {
  return sendRequest({
    url: `chains/status/?key=${API_KEY}&format=JSON`,
  });
};







export const reqEvents = (
  chainId: string,
  address: string,
  startingBlock: number,
  endingBlock: number,
  pageNumber: number = 0,
  topic: string
) => {
  if (topic && topic !== "all") {
    return sendRequest({
      url: `${chainId}/events/topics/${topic}/?key=${API_KEY}&format=JSON&page-number=${pageNumber}&starting-block=${startingBlock}&ending-block=${endingBlock}&sender-address=${address}`,
    });
  }

  return sendRequest({
    url: `${chainId}/events/address/${address}/?key=${API_KEY}&format=JSON&page-number=${pageNumber}&starting-block=${startingBlock}&ending-block=${endingBlock}`,
  });
};

export const reqNFTs = (chainId: string, contract: string) => {
  return sendRequest({
    url: `${chainId}/tokens/${contract}/nft_token_ids/?key=${API_KEY}&format=JSON`,
  });
};

export const reqAllNFTs = (chainId: string, pageNumber: number = 0) => {
  return sendRequest({
    url: `${chainId}/nft_market/?key=${API_KEY}&format=JSON&page-number=${pageNumber}`,
  });
};

export const reqDetailsNFT = (chainId: string, contract: string) => {
  return sendRequest({
    url: `pricing/historical_by_addresses_v2/${chainId}/USD/${contract}/?key=${API_KEY}&format=JSON`,
  });
};

export const reqTestDetailsNFTs = (chainId: string, contract: string) => {
  return sendRequest({
    url: `${chainId}/nft_market/${contract}?key=${API_KEY}&format=JSON`,
  });
};

export const reqNFTmetadata = (
  chainId: string,
  contract: string,
  tokenId: string
) => {
  return sendRequest({
    url: `${chainId}/tokens/${contract}/nft_metadata/${tokenId}/?key=${API_KEY}&format=JSON`,
  });
};

export const reqNFTTransactions = (
  chainId: string,
  contract: string,
  tokenId: string
) => {
  return sendRequest({
    url: `${chainId}/tokens/${contract}/nft_transactions/${tokenId}/?key=${API_KEY}&format=JSON`,
  });
};

export const reqNFTSales = (
  chainId: string,
  contract: string,
  tokenId: string
) => {
  return sendRequest({
    url: `${chainId}/nft_market/collection/${contract}/token_id/${tokenId}/sales/?key=${API_KEY}&format=JSON`,
  });
};
