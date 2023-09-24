'use client';

import {WalletDisconnectButton, WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {NoSSR} from "next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr";

export function Buttons() {

    return <>
        <NoSSR>
            <WalletMultiButton/>
        </NoSSR>
    </>
}