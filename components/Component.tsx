export async function Component() {
    await new Promise((resolve) => setTimeout(resolve, 10_000));
    return <>Component</>;
}