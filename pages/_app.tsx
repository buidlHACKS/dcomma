import { FC, useState } from "react";
import { AppProps } from "next/app";
import "../global.css";
import { ThemeProvider } from "next-themes";
import AppContext from "../AppContext";
import { useFetchChains } from "../hooks/useFetchChains";
import { Web3Provider } from "../auth/Web3";


const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { isLoadingChains, allChains, selectedChainId, setSelectedChainId } =
    useFetchChains();

  const [address, setAddress] = useState("");
  return (
    <AppContext.Provider
      value={{
        address,
        setAddress,
        selectedChainId,
        setSelectedChainId,
        allChains,
        isLoadingChains,
      }}
    >
      <ThemeProvider enableSystem={ false } attribute="class">
        <Web3Provider>

          <Component { ...pageProps } />
          </Web3Provider>
      </ThemeProvider>
    </AppContext.Provider>
  );
};
export default App;
