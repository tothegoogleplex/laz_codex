import {
    faMeteor, faPlus, faMinus, faExplosion
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavDice({ type, value }) {
    return (null
        // roll until fail : value under d8 value
        //     let content = [];
        //                         for (let i = 1; i <= 5; i++) {
        //                             content.push(<NavDice type={type} value={amount} />);
        //                         }
        //                         return content;
    );
};

export function BaseDice({ value }) {
    var icon = "";

    switch (value) {
        case 1: icon = faExplosion;
            break;
        case 2: icon = faMinus;
            break;
        case 3: icon = "";
            break;
        case 4: icon = "";
            break;
        case 5: icon = faPlus;
            break;
        case 6: icon = faMeteor;
            break;
    }

    return (
        <div className="grid rounded w-24 h-24 bg-black items-center">
            {
                icon === "" ?
                    null :
                    <FontAwesomeIcon className="w-4/5 h-4/5 text-white mx-auto" icon={icon} />
            }
        </div>
    );
};

export function EnvDice({ type, value }) {
    return (
        <div className="grid rounded w-24 h-24 bg-black items-center">
            {
                (() => {
                    if (Math.floor(Math.random() * 11) > value) {
                        console.log(value);
                        <FontAwesomeIcon className="w-4/5 h-4/5 text-white mx-auto" icon={type} />
                    }
                })()

            }
        </div>
    );
};
// todo: rename characters stats to match so that can index name as icon={}
// grid layout for buttons
// save dice to state
// render dice from state