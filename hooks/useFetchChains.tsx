import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { reqChains } from "../services/httpReq";
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
export const useFetchChains = () => {
  const [selectedChainId, setSelectedChainId] = useState(1);
  const [allChains, setAllChains] = useState<ChainObject[]>([]);
  const [isLoadingChains, setIsLoadingChains] = useState(false);

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
    
  useEffect(() => {
    setIsLoadingChains( true );
    console.log( "all chains obj======>>>>>>>>", chainObj )
    // setAllChains( chainObj )
      reqChains()
      .then(response => {
        // setAllChains( response?.data?.items || [] );
         console.log("all chains data =======>>>>>>>>>>>>",response?.data?.items)
             setAllChains( chainObj )

        setSelectedChainId(1);
      })
        .finally( () =>
        {
       
        setIsLoadingChains(false);
      });

  }, []);

  return { isLoadingChains, allChains, selectedChainId, setSelectedChainId };
};
