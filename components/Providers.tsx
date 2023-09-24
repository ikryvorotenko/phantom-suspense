'use client';

import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {ReactNode, useMemo} from "react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {clusterApiUrl} from "@solana/web3.js";

export function Providers({children}: { children: ReactNode }) {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <>
                        {children}
                    </>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}