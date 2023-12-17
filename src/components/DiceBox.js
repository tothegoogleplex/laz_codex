import { Fragment, useState } from "react";
import { EnvDice, NavDice, BaseDice } from "./Dice";

export function DiceBox({ self, nav, base, env }) {
    const [dice, setDice] = useState([]);
    const [stunt, setStunt] = useState(self.stunt);
    const [health, setHealth] = useState(self.health);
    const [roll, SetRoll] = useState("Base");
    const [amount, setAmount] = useState(21);

    return (
        <Fragment>
            <div className="mt-10"><h2>Health</h2> <h2>Kinetic Armour</h2> <h2>Energy Armour</h2><h2>Stunt</h2></div>

            <div className="mt-10 md:mx-20 bg-white rounded p-4">
                <div className="flex flex-row flex-wrap place-content-evenly gap-3">
                    {
                        roll === "Base" ?
                            <BaseDice value={amount} />
                            : null
                    }
                </div>
            </div>
        </Fragment>
    );
}