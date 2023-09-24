import {Suspense} from "react";
import {Component} from "@/components/Component";

export default function Home({params}: { params: { id: string }}) {
    return (
        <Suspense fallback={<div>10 seconds Loading...</div>}>
            <Component id={params.id}/>
        </Suspense>
    )
}

