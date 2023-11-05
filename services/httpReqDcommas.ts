import axios from 'axios';
import qs from 'query-string';

  interface ChainObject {
  name: string;
  chain_id: string;
  is_testnet: boolean;
  logo_url: string;
  black_logo_url: string;
  white_logo_url: string;
  color_theme: {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    hex: string;
    css_rgb: string;
  };
  appchain_of: null | string;
  synced_block_height: number;
  synced_blocked_signed_at: string;
  has_data: boolean;
}
 enum EvmChainId
  {
   Etherium = 1,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  BASE = 8453,
  BSC = 56,
  MAINNET = 1,
  FANTOM = 250,
  GNOSIS = 100,
  OPBNB = 204,
  OPTIMISM = 10,
  POLYGON = 137,
  LINEA = 59144,
}

  enum EvmChainName
  {
   Etherium='Etherium',
  ARBITRUM = 'arbitrum',
  AVALANCHE = 'avalanche',
  BASE = 'base',
  BSC = 'bsc',
  FANTOM = 'fantom',
  GNOSIS = 'gnosis',
  LINEA = 'linea',
  MAINNET = 'mainnet',
  OPBNB = 'opbnb',
  OPTIMISM = 'optimism',
  POLYGON = 'polygon',
}
const chainObj: ChainObject[] = [
  {
    name: EvmChainName.Etherium,
    chain_id: EvmChainId.Etherium,
    is_testnet: true,
    logo_url: 'URL for Arbitrum Logo',
    black_logo_url: 'URL for Arbitrum Black Logo',
    white_logo_url: 'URL for Arbitrum White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.ARBITRUM,
    chain_id: EvmChainId.ARBITRUM,
    is_testnet: true,
    logo_url: 'URL for Arbitrum Logo',
    black_logo_url: 'URL for Arbitrum Black Logo',
    white_logo_url: 'URL for Arbitrum White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.AVALANCHE,
    chain_id: EvmChainId.AVALANCHE,
    is_testnet: true,
    logo_url: 'URL for Avalanche Logo',
    black_logo_url: 'URL for Avalanche Black Logo',
    white_logo_url: 'URL for Avalanche White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.BASE,
    chain_id: EvmChainId.BASE,
    is_testnet: true,
    logo_url: 'URL for Base Logo',
    black_logo_url: 'URL for Base Black Logo',
    white_logo_url: 'URL for Base White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.BSC,
    chain_id: EvmChainId.BSC,
    is_testnet: true,
    logo_url: 'URL for BSC Logo',
    black_logo_url: 'URL for BSC Black Logo',
    white_logo_url: 'URL for BSC White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.FANTOM,
    chain_id: EvmChainId.FANTOM,
    is_testnet: true,
    logo_url: 'URL for FANTOM Logo',
    black_logo_url: 'URL for FANTOM Black Logo',
    white_logo_url: 'URL for FANTOM White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.GNOSIS,
    chain_id: EvmChainId.GNOSIS,
    is_testnet: true,
    logo_url: 'URL for GNOSIS Logo',
    black_logo_url: 'URL for GNOSIS Black Logo',
    white_logo_url: 'URL for GNOSIS White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.LINEA,
    chain_id: EvmChainId.LINEA,
    is_testnet: true,
    logo_url: 'URL for LINEA Logo',
    black_logo_url: 'URL for LINEA Black Logo',
    white_logo_url: 'URL for LINEA White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.OPBNB,
    chain_id: EvmChainId.OPBNB,
    is_testnet: true,
    logo_url: 'URL for OPBNB Logo',
    black_logo_url: 'URL for OPBNB Black Logo',
    white_logo_url: 'URL for OPBNB White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.OPTIMISM,
    chain_id: EvmChainId.OPTIMISM,
    is_testnet: true,
    logo_url: 'URL for OPTIMISM Logo',
    black_logo_url: 'URL for OPTIMISM Black Logo',
    white_logo_url: 'URL for OPTIMISM White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
  {
    name: EvmChainName.POLYGON,
    chain_id: EvmChainId.POLYGON,
    is_testnet: true,
    logo_url: 'URL for POLYGON Logo',
    black_logo_url: 'URL for POLYGON Black Logo',
    white_logo_url: 'URL for POLYGON White Logo',
    color_theme: {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 255,
      hex: '#000000',
      css_rgb: 'rgb(0 0 0)',
    },
    appchain_of: null,
    synced_block_height: 9986677,
    synced_blocked_signed_at: '2023-11-04T20:52:24Z',
    has_data: true,
  },
];

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
  } catch ( error )
  {
    if (error.response) {
      // The request was made and the server responded with a status code
      // other than 2xx (e.g., 404, 500).
      console.log('Error response data:', error.response.data);
      console.log('Status code:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered the error
      console.log('Error message:', error.message);
    }
  
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
    url: `tokens/${ address }?networks=${ chainname }&verified=true&api-key=${ API_KEY }`,
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

export const reqAllNFTs = ( chainname: string, contract_address: string, token_id: string) => {
  return sendRequest({
    url: `nft_metadata/${chainname}/${contract_address}/${token_id}?api-key=${API_KEY}`,
  } );
};

export const reqNFTAddress = ( address: string) => {
  return sendRequest({
    url: `nfts/${address}/?api-key=${API_KEY}`,
  } );
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
