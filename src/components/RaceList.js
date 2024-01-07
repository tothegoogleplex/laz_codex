import { Fragment, useState } from "react";
import { races } from '../races';

export function RaceList() {
    const [data] = useState(Object.entries(races));

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <Fragment>
            <div className="App h-screen">
                <div className="container sm:w-screen lg:w-3/4 h-auto z-50">
                    {data.map((race) =>
                        <Fragment>
                            <div className={classNames("m-5 h-32 w-3/4 mx-auto bg-cover bg-no-repeat rounded", race[1].banner_anchor)} style={{ "backgroundImage": `url("${process.env.PUBLIC_URL + "/images/races/" + race[0] + "/" + race[1].banner_img}")` }}>
                                <h2>{race[1].name}</h2>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </Fragment>
    );
}