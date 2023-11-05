import '@rainbow-me/rainbowkit/styles.css'
import merge from 'lodash.merge';
import
  {
  
  RainbowKitProvider,
  darkTheme,
    Theme,
    getDefaultWallets,
  lightTheme
} from '@rainbow-me/rainbowkit';
// import { getDefaultWallets, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit'
// import { mainnet, goerli, polygon, arbitrum } from '@wagmi/core/chain'
// import {  mainnet, goerli, polygon, arbitrum } from '@wagmi/core'


import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, goerli, polygon, arbitrum, bsc, optimism, fantom, avalanche} from '@wagmi/core/chains'

import { publicProvider } from 'wagmi/providers/public'
import { ReactNode } from 'react'
import { infuraProvider } from 'wagmi/providers/infura'
import React from 'react'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { createClient } from 'viem';



const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#0E7D02',
    
  },
  
} as Theme);

interface Props {
  children: ReactNode
}

const { chains, publicClient } = configureChains(
  [mainnet, polygon, arbitrum, bsc, optimism, fantom, avalanche],
  [
    alchemyProvider({ apiKey: "45654654654" }),
    publicProvider()
  ] 
);

const projectId = 'YOUR_PROJECT_ID';

const { connectors } = getDefaultWallets( {
  appName: "Wallet  Folio",
  projectId,
  chains,
} )

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Web3Provider(props: Props) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact"  theme={lightTheme({
        
        borderRadius: 'medium',
        accentColor: '#4F46E5',
        fontStack: 'rounded',
        

      })} coolMode chains={chains}>
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
