import {Suspense} from "react";
import {Component} from "@/components/Component";

export default function Home() {
    return (
        <Suspense fallback={<div>10 seconds Loading...</div>}>
            <Component key={Math.random()} id={String(Math.random())}/>
        </Suspense>
    )
}

export const dynamic = 'force-dynamic'