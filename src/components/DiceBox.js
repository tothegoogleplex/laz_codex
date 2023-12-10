import { useState } from "react";
import { EnvDice } from "./Dice";

export function DiceBox({ self, nav, base, env }) {
    const [dice, setDice] = useState([]);
    const [stunt, setStunt] = useState(self.stunt);
    const [health, setHealth] = useState(self.health);

    return (
        <div className="mt-10 mx-10 border rounded">
            <div className="">
                <EnvDice value={""} type={""} />
            </div>
        </div>
    );
}