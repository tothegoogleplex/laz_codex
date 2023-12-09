import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function CharCard({ char }) {

    var bgUrl = require("../images/" + char[0] + "/" + char[1].profile_img);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    };

    return (
        <Fragment>
            <Link className="m-5 basis-full sm:basis-1/3 lg:basis-1/4" to={"/char/" + char[0]}>

                <div className={classNames("hover:shadow-md hover:shadow-zinc-900 rounded-md h-80 bg-cover flex flex-col justify-end", char[1].icon_anchor)} style={{ "backgroundImage": `url("${bgUrl}")` }}>

                    <div className="from-black from-5% bg-gradient-to-t">
                        <h3 className="text-2xl text-center font-semibold"> {char[1].name} </h3>

                        <h4 className="text-center my-3" > {char[1].race} </h4>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}