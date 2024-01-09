import { Fragment } from 'react';
import { TextBlurb } from './TextBlurb';

// used for both the locations and races list

export function Banner({ subj }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <Fragment>
            <div className={classNames("m-5 h-40 bg-cover bg-no-repeat rounded flex flex-col-reverse", subj[1].banner_anchor)} style={{ "backgroundImage": `url("${process.env.PUBLIC_URL + "/images/races/" + subj[0] + "/" + subj[1].banner_img}")` }}>
                <h2 className="text-5xl md:ml-5 lg:ml-10 mb-2 order-last">{subj[1].name}</h2>
                <h2 className="text-2xl lg:text-3xl md:ml-10 lg:ml-20 mb-1">{subj[1].subtitle}</h2>
            </div>
            <div className="px-8">
                {subj[1].description.map((p) => (
                    <TextBlurb p={p} />
                ))}
            </div>
        </Fragment>
    );
}