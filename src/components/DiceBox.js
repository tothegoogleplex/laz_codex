import { Fragment, useState } from "react";
import { EnvDice, NavDice, BaseDice } from "./Dice";

import {
    faHeartPulse, faHeartCircleBolt, faShieldHalved, faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DiceBox({ self, nav, base, env }) {
    const [dice, setDice] = useState([]);
    const [stunt, setStunt] = useState(self.stunt);
    const [health, setHealth] = useState(self.health);
    const [roll, SetRoll] = useState("Base");
    const [amount, setAmount] = useState(0);
    const [curStunt, setCurStunt] = useState(self.Stunt);
    const [curHealth, setCurHealth] = useState(self.Health);

    return (
        <Fragment>
            <div className="mt-10 grid grid-cols-4 justify-items-center">
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => (SetRoll("Base"), setAmount(self.Health))} className="w-1/2 h-1/2 text-white self-center" icon={faHeartPulse} />
                    <p className="self-center text-2xl"> {curHealth} / {self.Health}</p>
                    <h2 className="text-2xl font-bold self-center">Health</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faShieldHalved} />
                    <p className="self-center text-2xl">{self.KAC}</p>
                    <h2 className="text-2xl font-bold self-center">KAC</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faHeartCircleBolt} />
                    <p className="self-center text-2xl">{self.EAC}</p>
                    <h2 className="text-2xl font-bold self-center">EAC</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => (SetRoll("Base"), setAmount(self.Stunt))} className="w-1/2 h-1/2 text-white self-center" icon={faStar} />
                    <p className="self-center text-2xl">{curStunt} / {self.Stunt}</p>
                    <h2 className="text-2xl font-bold self-center">Stunt</h2>
                </div>
            </div>

            <div className="mt-10 md:mx-20 bg-white rounded p-4">
                <div className="flex flex-row flex-wrap place-content-evenly gap-3">
                    {
                        roll === "Base" ? (() => {
                            let content = [];
                            for (let i = 1; i <= amount; i++) {
                                content.push(<BaseDice value={Math.floor(Math.random() * 7)} />);
                            }
                            return content;
                        })()

                            : null
                    }
                </div>
            </div>
        </Fragment>
    );
}