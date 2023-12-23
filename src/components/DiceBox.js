import { Fragment, useState } from "react";
import { EnvDice, NavDice, BaseDice } from "./Dice";

import {
    faHandFist, faHandsBubbles, faUserShield, faInstitution, faGraduationCap, faPeopleArrows
} from '@fortawesome/free-solid-svg-icons';
import { faMountainSun, faWater, faPlaneDeparture, faRocket } from '@fortawesome/free-solid-svg-icons';
import {
    faFire as Heat,
    faIcicles as Cold,
    faBiohazard as Bio,
    faRadiation as Rad,
    faHandHoldingHand as Phys,
    faBolt as Elec,
    faGaugeHigh as Grav,
    faStarHalfStroke as Cos
} from '@fortawesome/free-solid-svg-icons';
import {
    faHeartPulse, faHeartCircleBolt, faShieldHalved, faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DiceBox({ self, nav, base, env }) {
    const [roll, setRoll] = useState("Base");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("Heat");
    const [curStunt, setCurStunt] = useState(self.Stunt);
    const [curHealth, setCurHealth] = useState(self.Health);

    return (
        <Fragment>
            {/* self */}
            <h2 className="text-white text-3xl mt-10 text-center underline underline-offset-3">The Self</h2>
            <div className="mt-10 flex flex-row w-full justify-center">
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faHeartPulse} />
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
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faStar} />
                    <p className="self-center text-2xl">{curStunt} / {self.Stunt}</p>
                    <h2 className="text-2xl font-bold self-center">Stunt</h2>
                </div>
            </div>

            {/* Navigate */}
            <h2 className="text-white text-3xl mt-10 text-center underline underline-offset-3">Navigation</h2>
            <div className="mt-10 flex flex-row w-full justify-center">
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faMountainSun} />
                    <p className="self-center text-2xl">{nav.Land}</p>
                    <h2 className="text-2xl font-bold self-center">Land</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faPlaneDeparture} />
                    <p className="self-center text-2xl">{nav.Atmos}</p>
                    <h2 className="text-2xl font-bold self-center">Atmos</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faWater} />
                    <p className="self-center text-2xl">{nav.Swim}</p>
                    <h2 className="text-2xl font-bold self-center">Swim</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon className="w-1/2 h-1/2 text-white self-center" icon={faRocket} />
                    <p className="self-center text-2xl">{nav.Space}</p>
                    <h2 className="text-2xl font-bold self-center">Space</h2>
                </div>
            </div>

            {/* environ */}
            <h2 className="text-white text-3xl mt-10 text-center underline underline-offset-3">Environmental Resistences</h2>
            <div className="mt-10 flex flex-row flex-wrap w-full justify-center md:divide-x">
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Heat);
                        setType(Heat);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Heat} />
                    <p className="self-center text-2xl">{env.Heat}</p>
                    <h2 className="text-2xl font-bold self-center">Heat</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Cold);
                        setType(Cold);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Cold} />
                    <p className="self-center text-2xl">{env.Cold}</p>
                    <h2 className="text-2xl font-bold self-center">Cold</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Bio);
                        setType(Bio);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Bio} />
                    <p className="self-center text-2xl">{env.Bio}</p>
                    <h2 className="text-2xl font-bold self-center">Biohazard</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Rad);
                        setType(Rad);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Rad} />
                    <p className="self-center text-2xl">{env.Rad}</p>
                    <h2 className="text-2xl font-bold self-center">Radiation</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Phys);
                        setType(Phys);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Phys} />
                    <p className="self-center text-2xl">{env.Phys}</p>
                    <h2 className="text-2xl font-bold self-center">Physical</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Elec);
                        setType(Elec);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Elec} />
                    <p className="self-center text-2xl">{env.Elec}</p>
                    <h2 className="text-2xl font-bold self-center">Electric</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Grav);
                        setType(Grav);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Grav} />
                    <p className="self-center text-2xl">{env.Grav}</p>
                    <h2 className="text-2xl font-bold self-center">Gravity</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Env");
                        setAmount(env.Cos);
                        setType(Cos);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={Cos} />
                    <p className="self-center text-2xl">{env.Cos}</p>
                    <h2 className="text-2xl font-bold self-center">Cosmic</h2>
                </div>
            </div>

            {/* base stats */}
            <h2 className="text-white text-3xl mt-10 text-center underline underline-offset-3">Base Stats</h2>
            <div className="mt-10 flex flex-row flex-wrap w-full justify-center md:divide-x">
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Base");
                        setAmount(base.Mox);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={faHandFist} />
                    <p className="self-center text-2xl">{base.Mox}</p>
                    <h2 className="text-2xl font-bold self-center">Moxie</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Base");
                        setAmount(base.Dex);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={faHandsBubbles} />
                    <p className="self-center text-2xl">{base.Dex}</p>
                    <h2 className="text-2xl font-bold self-center">Dexterity</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Base");
                        setAmount(base.Fort);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={faUserShield} />
                    <p className="self-center text-2xl">{base.Fort}</p>
                    <h2 className="text-2xl font-bold self-center">Fortitude</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Base");
                        setAmount(base.Acu);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={faInstitution} />
                    <p className="self-center text-2xl">{base.Acu}</p>
                    <h2 className="text-2xl font-bold self-center">Acumen</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Base");
                        setAmount(base.Wit);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={faGraduationCap} />
                    <p className="self-center text-2xl">{base.Wit}</p>
                    <h2 className="text-2xl font-bold self-center">Wit</h2>
                </div>
                <div className="w-32 h-auto flex flex-col">
                    <FontAwesomeIcon onClick={() => {
                        setRoll("Base");
                        setAmount(base.Pres);
                    }} className="w-1/2 h-1/2 text-white self-center" icon={faPeopleArrows} />
                    <p className="self-center text-2xl">{base.Pres}</p>
                    <h2 className="text-2xl font-bold self-center">Presence</h2>
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
                    {
                        roll === "Env" ? (() => {
                            let content = [];
                            for (let i = 1; i <= 5; i++) {
                                content.push(<EnvDice type={type} value={amount} />);
                            }
                            return content;
                        })()

                            : null
                    }
                    {
                        roll === "Nav" ? <NavDice type={type} value={amount} />
                            : null
                    }
                </div>
            </div>
        </Fragment>
    );
}