import { main } from "./utils";

function numberOfIncrease(input: string[]) {
    const depths = input.map(i => parseInt(i));

    const groups = buildGroups();

    let [previous, current, ...rest] = groups;
    let res = (current - previous > 0) ? 1 : 0;
    rest.forEach(depth => {
        previous = current;
        current = depth;
        res += (current - previous > 0) ? 1 : 0;
    });
    return res;

    function buildGroups() {
        const n = depths.length - 2;
        const groups = Array(n).fill(0);
        depths.forEach((depth, index) => {
            for (const i of nextIndexToUpdate(index, n)) {
                groups[i] += depth;
            }
        });
        return groups;
    }
}

function* nextIndexToUpdate(i: number, n: number) {
    const possibleIndexes = [i - 1, i, i + 1];

    for (const possibleIndex of possibleIndexes) {
        if (isValid(possibleIndex)) {
            yield possibleIndex;
        }
    }

    function isValid(index: number) {
        return index >= 0 && index < n;
    }
}



main("1.1", numberOfIncrease);