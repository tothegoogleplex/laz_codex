import {
    faMeteor, faPlus, faMinus, faExplosion
} from '@fortawesome/free-solid-svg-icons';

import {
    faFire as Heat,
    faIcicles as Cold,
    faBiohazard as Bio,
    faRadiation as Rad,
    faHandHolding as Phys,
    faBolt as Elec,
    faGaugeHigh as Grav,
    faStarHalfStroke as Cos
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavDice({ value }) {
    return (null);
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

export function EnvDice({ value, type }) {

    return (
        null
    );
};
// todo: rename characters stats to match so that can index name as icon={}
// grid layout for buttons
// save dice to state
// render dice from state