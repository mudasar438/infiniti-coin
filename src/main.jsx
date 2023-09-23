import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import { BrowserRouter } from "react-router-dom";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { goerli } from "wagmi/chains";
import { mainnet } from "wagmi/chains";

import App from "./App";
import "./index.css";
import theme from "./theme";
import { ConectivityProvider } from "./utils";

const chains = [mainnet];
const projectId = "cba73ada547c01c1a64d7725fb732495";
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ConectivityProvider>
            <App />
          </ConectivityProvider>
        </ThemeProvider>
      </BrowserRouter>
    </WagmiConfig>

    <Box sx={{ zIndex: 10000 }}>
      <Web3Modal
        themeMode="dark"
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-z-index": "1000000000000000",
        }}
      />
    </Box>
  </React.StrictMode>
);
