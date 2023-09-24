import {Buttons} from "@/components/Buttons";
import {Suspense} from "react";
import {Component} from "@/components/Component";

export default function Home() {
    return (
        <main className="">
            <Buttons/>


            <Suspense fallback={<div>10 seconds Loading...</div>}>
                <Component key={Math.random()} id={String(Math.random())}/>
            </Suspense>

        </main>
    )
}

export const dynamic = 'force-dynamic'