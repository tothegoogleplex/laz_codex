import { Fragment } from "react";
import { TextBlurb } from './TextBlurb';

export function Subtype({ subtype }) {
    return (
        <Fragment>
            <div className="px-8">
                <h3 className="text-2xl lg:text-3xl ml-5 mt-10">{subtype.name}</h3>
                <h4 className="text-xl md:ml-10 lg:ml-20"><i>{subtype.subtitle}</i></h4>

                {subtype.detail.map((p) => (
                    <TextBlurb p={p} />
                ))}

                <div>

                </div>

                <blockquote className="text-md italic font-semibold text-left text-zinc-400 text-center mt-5">
                    <p>"{subtype.quote}"</p>
                </blockquote>
            </div>

            <hr className="mt-5 w-80 md:w-4/5 mx-auto" />
        </Fragment>
    );
}