export async function Component({id}: { id: string }) {
    await new Promise((resolve) => setTimeout(resolve, 10_000));
    return <>Component {id}</>;
}