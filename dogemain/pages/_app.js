import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Doge Original Vision",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}theme={darkTheme({
      accentColor: '#FFC700',
      accentColorForeground: 'black',
      borderRadius: 'large',
      fontStack: 'system',
      overlayBlur: 'small',
      fontSize:"large"
    })}>
        <Component {...pageProps} /></RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
