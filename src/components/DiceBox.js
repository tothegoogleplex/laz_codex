import { Fragment, useState } from "react";
import { EnvDice, NavDice, BaseDice } from "./Dice";

export function DiceBox({ self, nav, base, env }) {
    const [dice, setDice] = useState([]);
    const [stunt, setStunt] = useState(self.stunt);
    const [health, setHealth] = useState(self.health);

    return (
        <Fragment>
            <div className="mt-10"><h2>Health</h2> <h2>Kinetic Armour</h2> <h2>Energy Armour</h2><h2>Stunt</h2></div>

            <div className="mt-10 md:mx-20 border rounded">
                <div className="flex flex-row flex-wrap">
                    <BaseDice value={6} />
                    <BaseDice value={1} />
                    <BaseDice value={4} />
                    <BaseDice value={3} />
                    <BaseDice value={2} />
                    <BaseDice value={5} />
                </div>
            </div>

            {/* <div> buttons to roll here </div> */}
        </Fragment>
    );
}