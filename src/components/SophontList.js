import { useState } from "react";
import { sophonts } from '../sophonts';
import { Banner } from "./Banner";
import { Link } from 'react-router-dom';

export function SophontList() {
    const [data] = useState(Object.entries(sophonts));

    return (
        <div className="App h-auto">
            <div className="container sm:w-screen lg:w-3/4 h-auto z-50">
                <div className="w-full md:w-4/5 mx-auto h-auto">
                    {data.map((sophont) =>
                        <Link to={"/sophont/" + sophont[0]} key={sophont[0]}>
                            <Banner subj={sophont} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}