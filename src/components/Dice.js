import {
    faMeteor, faPlus, faMinus, faExplosion
} from "@fortawesome/react-fontawesome";

import {
    faFire as Heat,
    faIcicles as Cold,
    faBiohazard as Bio,
    faRadiation as Rad,
    faBolt as Elect,
    faGaugeHigh as Grav,
    faStarHalfStroke as Cos
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavDice(){
    return(null);
};

export function BaseDice(){
    return(null);
};

export function EnvDice({ value, type }) {

    return (<FontAwesomeIcon icon={Heat} />);
};
// todo: rename characters stats to match so that can index name as icon={}
// grid layout for buttons
// save dice to state
// render dice from state