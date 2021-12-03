import { main } from "./utils";

enum Direction { Up = "up", Down = "down", Forward = "forward" }
type Command = [Direction, number];

function computePosition(input: string[]) {
    const commands: Command[] = input.map(i => {
        const [direction, value] = i.split(" ");
        return [direction as unknown as Direction, parseInt(value)];
    });

    const position = [0, 0];

    commands.forEach(([direction, value]) => {
        if (direction === Direction.Forward) {
            return position[0] += value;
        }
        if (direction === Direction.Up) {
            return position[1] -= value;
        }
        if (direction === Direction.Down) {
            return position[1] += value;
        }
    });
    return position[0]*position[1];
}

main("2.1", computePosition);