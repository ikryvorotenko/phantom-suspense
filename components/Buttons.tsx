'use client';

import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {NoSSR} from "next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr";

export function Buttons() {

    return <>
        <NoSSR>
            <WalletMultiButton/>
        </NoSSR>
    </>
}