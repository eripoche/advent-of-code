import { main } from "./utils";

enum Direction { Up = "up", Down = "down", Forward = "forward" }
type Command = [Direction, number];

function computePosition(input: string[]) {
    const commands: Command[] = input.map(i => {
        const [direction, value] = i.split(" ");
        return [direction as unknown as Direction, parseInt(value)];
    });

    const position = [0, 0];
    let aim = 0;

    commands.forEach(([direction, value]) => {
        if (direction === Direction.Forward) {
            position[0] += value;
            position[1] += aim * value;
            return;
        }
        if (direction === Direction.Up) {
            return aim -= value;
        }
        if (direction === Direction.Down) {
            return aim += value;
        }
    });
    return position[0]*position[1];
}

main("2.1", computePosition);