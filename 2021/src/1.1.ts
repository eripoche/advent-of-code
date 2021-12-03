import { main } from "./utils";

function numberOfIncrease(input: string[]) {
    const depths = input.map(i => parseInt(i));

    let [previous, current, ...rest] = depths;
    let res = (current - previous > 0) ? 1 : 0;
    rest.forEach(depth => {
        previous = current;
        current = depth;
        res += (current - previous > 0) ? 1 : 0;
    });
    return res;
}

main("1.1", numberOfIncrease);