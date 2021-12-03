import { readInput } from "./readInput";

export async function main(name: string, fn: (args: string[]) => any) {
    const input = await readInput(name);
    
    const res = fn(input);

    console.log(res);
}