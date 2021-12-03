import { readFile } from "fs/promises";

export async function readInput(inputFilename: string) {
    return (await readFile(`src/input/${inputFilename}.txt`)).toString().split("\n");
}
