import { Fragment } from "react";
import {
    faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AboutPage() {
    return (
        <Fragment>
            <div className="App h-auto">
                <div className="container sm:w-screen lg:w-3/4 h-auto z-50">
                    <div className="container sm:w-screen lg:w-3/4 h-auto z-50">
                        <div className="w-full items-center text-center">
                            <h1 className="text-3xl my-8">limit approaching zero</h1>
                            <p className="m-3">limit approaching zero is a FUDGE-based TTRPG system that focuses on far-future, spacefaring stories that explore our choices, ethics, morals and communities and the technology surrounding them. While characters here belong to their respective owners, the system and setting is available under the Open Game License.</p>
                            <p className="m-3">Art displayed onsite is commissioned work and not for use in any way by those who are not the artist or commissioner.</p>
                            <a href="https://github.com/tothegoogleplex/laz_codex"><FontAwesomeIcon className="text-white self-center" icon={faCodeBranch} /></a>
                            <p className="m-3">React + Tailwind CSS + Heroicons + FortAwesome Icons + react-particles</p>
                            <hr></hr>
                            <p className="m-3">With love and appreciation to:</p>
                            <p className="m-3">Jack the Avali</p>
                            <p className="m-3">Crew of the NS Gravity Well</p>
                            <p className="m-3">Roxy Poxy</p>
                            <p className="m-3">Yuri</p>
                            <p className="m-3">Nat</p>
                            <p className="m-3">spacekid</p>
                            <p className="m-3">"The Roleplayer"</p>
                            <p className="m-3"><i>logged by Phi L3MM4 (buildingstarships)</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}